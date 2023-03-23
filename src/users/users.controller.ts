import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Пользователи') // swagger
@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  
  @ApiOperation({summary: 'Создание пользователя', }) // Swagger описание запроса 
  @ApiResponse({status: 201, type: User}) // какой будет ответ
  @Post()
  create(@Body() userDto: CreateUserDto){
    return this.usersService.createUser(userDto)
  }// REST API

  @ApiOperation({summary: 'Получить всех пользователей', }) // Swagger описание запроса 
  @ApiResponse({status: 200, type: [User]}) // какой будет ответ (массив пользователей)
  @Get()
  getAll() {
    return this.usersService.getAll()
  }
}
