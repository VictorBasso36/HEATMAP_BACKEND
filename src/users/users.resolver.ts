import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Parent,
  Mutation,
  Args,
  ResolveField,
} from '@nestjs/graphql';
import { BadRequestException, UseGuards } from '@nestjs/common';
import { UserEntity } from '../common/decorators/user.decorator';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UsersService } from './users.service';
import { User } from '../@generated/user/user.model';
import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ForgotPasswordInput, ForgotPasswordResponse } from './dto/forgot-password.input';
import { uuid } from 'uuidv4';
import nodemailer from 'nodemailer';
import { toAdmin } from 'src/auth/dto/signup.input';
import { FindManyUserArgs } from 'src/@generated/user/find-many-user.args';
import { UsersPaginatedModel } from './models/user.model';

@Resolver(() => User)
@UseGuards(GqlAuthGuard)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private prisma: PrismaService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => UsersPaginatedModel, { nullable: true })
  async users(@Args() args: FindManyUserArgs){
    const take = args?.take || 10;
    const skip = args?.skip || 0;
  
    const totalItems = await this.prisma.user.count();

    const totalPages = Math.ceil(totalItems / take);
  

    const data = await this.prisma.user.findMany({
      ...args,
      take,
      skip,
    });

    const hasNextPage = (skip + take) < totalItems;
    const hasPreviousPage = skip > 0;

    return {
      pageInfo: {
        take,
        hasNextPage,
        hasPreviousPage,
        totalPages,
        totalItems,
        skip,
      },
      nodes: data,
    };
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async updateUser(
    @UserEntity() user: User,
    @Args('data') newUserData: UpdateUserInput,
  ) {
    return this.usersService.updateUser(user.id, newUserData);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async changePassword(
    @UserEntity() user: User,
    @Args('data') changePassword: ChangePasswordInput,
  ) {
    return this.usersService.changePassword(
      user.id,
      user.password,
      changePassword,
    );
  }  

  @Mutation(() => User, {name: 'usertoadmin'})
  async usertoadmin(@Args('data') data: toAdmin){
    const pass = process.env.toadminpass
    if(pass === data?.password) {
      return await this.prisma.user.update({
        where: {
          email: data?.email
        },
        data: {
          role: {
            set: 'ADMIN'
          }
        }
      })
    }
  }
}
