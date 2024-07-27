import { PrismaService } from 'nestjs-prisma';
import { Injectable, BadRequestException } from '@nestjs/common';
import { PasswordService } from '../auth/password.service';
import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}

  updateUser(userId: string, newUserData: UpdateUserInput) {
    return this.prisma.user.update({
      data: newUserData,
      where: {
        id: userId,
      },
    });
  }

  async changePassword(
    userId: string,
    userPassword: string,
    changePassword: ChangePasswordInput,
  ) {
    const passwordValid = await this.passwordService.validatePassword(
      changePassword.oldPassword,
      userPassword,
    );

    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }

    const hashedPassword = await this.passwordService.hashPassword(
      changePassword.newPassword,
    );

    return this.prisma.user.update({
      data: {
        password: hashedPassword,
      },
      where: { id: userId },
    });
  }

  // async resetPassword(email: string, token: string, newPassword: string) {
  //   // Verifique se o token é válido e ainda não expirou
  //   const user = await this.prisma.user.findFirst({
  //     where: {
  //       resetPasswordToken: token,
  //       resetPasswordExpires: {
  //         gt: new Date(),
  //       },
  //     },
  //   });

  //   if (!user) {
  //     throw new BadRequestException('Token de redefinição de senha inválido ou expirado.');
  //   }

  //   // Atualize a senha do usuário
  //   const hashedPassword = await this.passwordService.hashPassword(newPassword);

  //   await this.prisma.user.update({
  //     where: { email: email },
  //     data: {
  //       password: hashedPassword,
  //       resetPasswordToken: null, // Limpe o token de redefinição de senha
  //       resetPasswordExpires: null, // Limpe a data de validade
  //     },
  //   });
  // }
}
