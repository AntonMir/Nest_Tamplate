import { ApiProperty } from '@nestjs/swagger/dist'

export class CreateUserDto {

  @ApiProperty({example: 'user@email.ru', description: 'Почтовый адрес'}) // swagger
  readonly email: string

  @ApiProperty({example: '12345678', description: 'Пароль'}) // swagger
  readonly password: string
}