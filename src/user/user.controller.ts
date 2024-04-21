import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User, Prisma } from '@prisma/client';

@Controller('api')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post('user/post')
    async createUser(@Body() data: Prisma.UserCreateInput): Promise<User> {
      return this.userService.createUser(data);
    }

    @Get('user/:id')
    async getUserById(@Param('id') id: number): Promise<User | null> {
      return this.userService.user({ id: Number(id) });
    }
  
    @Get('allUsers')
    async getUsers(
      @Query('skip') skip?: number,
      @Query('take') take?: number,
      @Query('cursor') cursor?: Prisma.UserWhereUniqueInput,
      @Query('where') where?: Prisma.UserWhereInput,
      @Query('orderBy') orderBy?: Prisma.UserOrderByWithRelationInput,
    ): Promise<User[]> {
      return this.userService.users({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    }
  
    @Put('user/:id')
    async updateUser(
      @Param('id') id: string,
      @Body() data: Prisma.UserUpdateInput,
    ): Promise<User> {
      return this.userService.updateUser({
        where: { id: Number(id) },
        data,
      });
    }
  
    @Delete('user/:id')
    async deleteUser(@Param('id') id: string): Promise<User> {
      return this.userService.deleteUser({ id: Number(id) });
    }
}
