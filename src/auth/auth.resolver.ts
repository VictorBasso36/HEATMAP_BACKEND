import {
  Resolver,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './models/auth.model';
import { Token } from './models/token.model';
import { LoginInput } from './dto/login.input';
import { SignupInput, toAdmin } from './dto/signup.input';
import { RefreshTokenInput } from './dto/refresh-token.input';
import { User } from '../@generated/user/user.model';
import { PrismaService } from 'nestjs-prisma';
import { BadRequestException } from '@nestjs/common';
import { PasswordService } from './password.service';
import { ForgotPasswordInput, ForgotPasswordResponse, ResetPassResponse } from '../users/dto/forgot-password.input';
import { uuid } from 'uuidv4';
import * as nodemailer from 'nodemailer';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(
    private readonly auth: AuthService,
    private prisma: PrismaService,
    private readonly passwordService: PasswordService,
  ) {}

  @Mutation(() => ForgotPasswordResponse)
  async forgotPassword(
    @Args('forgotPasswordData') forgotPasswordData: ForgotPasswordInput,
  ): Promise<ForgotPasswordResponse> {

    const user = await this.prisma.user.findUnique({
      where: { email: forgotPasswordData.email },
    });
  
    if (!user) {
      throw new BadRequestException('E-mail não encontrado.');
    }
  
    const resetToken = uuid();
  
    await this.prisma.user.update({
      where: { email: forgotPasswordData.email },
      data: {
        resetPasswordToken: resetToken,
        resetPasswordExpires: new Date(new Date().getTime() + 3600000), // 1 hora de validade
      },
    });
  
    const resetPasswordUrl = `https://www.reclamesolar.com/refresh-password?token=${resetToken}`;
  
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
  });
  
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: forgotPasswordData?.email,
      subject: 'Reclame Solar - Redefinição de senha',
      html: `
        <p>Você solicitou a redefinição de sua senha. Clique no link abaixo para redefinir sua senha:</p>
        <a href="${resetPasswordUrl}">Redefinir senha</a>
        <p>Se você não solicitou essa alteração, por favor, ignore este e-mail.</p>
      `,
    };
  

    await transporter.sendMail(mailOptions);
  
    return {
      success: true,
      message: 'Um e-mail com instruções de redefinição de senha foi enviado.',
    };
  }

  @Mutation(() => ResetPassResponse)
  async resetPass(
    @Args('token') token: string,
    @Args('newPassword') newPassword: string,
  ): Promise<ResetPassResponse> {

    const user = await this.prisma.user.findFirst({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      throw new BadRequestException('Token inválido ou expirado.');
    }

    const hashedPassword = await this.passwordService.hashPassword(
      newPassword,
    );
    
    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordExpires: null,
      },
    });

    return {
      success: true,
      message: 'Senha redefinida com sucesso.',
    };
  }

  @Mutation(() => Auth)
  async signup(@Args('data') data: SignupInput) {
    data.email = data.email.toLowerCase();
    const { accessToken, refreshToken } = await this.auth.createUser(data);
    return {
      accessToken,
      refreshToken,
    };
  }

  @Mutation(() => Auth)
  async login(@Args('data') { email, password }: LoginInput) {
    const { accessToken, refreshToken } = await this.auth.login(
      email.toLowerCase(),
      password,
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  @Mutation(() => Token)
  async refreshToken(@Args() { token }: RefreshTokenInput) {
    return this.auth.refreshToken(token);
  }

  @ResolveField('user', () => User)
  async user(@Parent() auth: Auth) {
    return await this.auth.getUserFromToken(auth.accessToken);
  }
}
