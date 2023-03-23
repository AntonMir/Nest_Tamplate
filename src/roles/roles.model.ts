import { ApiProperty } from '@nestjs/swagger/dist'
import { Model, Table, Column, DataType } from 'sequelize-typescript'

// объекты, которые нужны для создания объекта из класса User
interface IRoleCreationAttrs {
  value: string
  description: string
}

@Table({
  tableName: 'roles',
  freezeTableName: true,
  timestamps: true
})
export class Role extends Model<Role, IRoleCreationAttrs> {
  
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'}) // swagger
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @ApiProperty({example: 'ADMIN', description: 'Уникальное значение роли'}) // swagger
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string

  @ApiProperty({example: 'Администратор', description: 'Описание роли'}) // swagger
  @Column({type: DataType.STRING, allowNull: false})
  description: string
}