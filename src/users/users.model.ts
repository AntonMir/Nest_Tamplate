import { ApiProperty } from '@nestjs/swagger/dist'
import { Model, Table, Column, DataType } from 'sequelize-typescript'

// объекты, которые нужны для создания объекта из класса User
interface IUserCreationAttrs {
  email: string
  password: string
}

@Table({
  tableName: 'users',
  freezeTableName: true,
  timestamps: true
})
export class User extends Model<User, IUserCreationAttrs> {
  
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'}) // swagger
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'}) // swagger
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string

  @ApiProperty({example: '12345678', description: 'Пароль'}) // swagger
  @Column({type: DataType.STRING, allowNull: false})
  password: string

  // по хорошему забаненые пользователи добавляются в отдельную таблицу
  @ApiProperty({example: 'true', description: 'Статус блокировки пользователя'}) // swagger
  @Column({type: DataType.STRING, defaultValue: false})
  banned: boolean

  @ApiProperty({example: 'За хулиганство', description: 'Причина блокировки'}) // swagger
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string
}