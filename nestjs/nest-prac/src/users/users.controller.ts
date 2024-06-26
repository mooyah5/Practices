import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interface/users.interface';
import { CreateUsersDto } from './CreateUsersDto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  // UsersService는 constructor를 통해 주입되어 사용됨
  // private을 사용하면 선언, 초기화가 동시에 이루어짐

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} user`;
  }

  @Post()
  create(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.create(createUsersDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createUsersDto: CreateUsersDto) {
    return `This action updates a #${id} user`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} user`;
  }
}
