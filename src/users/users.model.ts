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
  
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string

  @Column({type: DataType.STRING, allowNull: false})
  password: string

  // по хорошему забаненые пользователи добавляются в отдельную таблицу
  @Column({type: DataType.STRING, defaultValue: false})
  banned: boolean

  @Column({type: DataType.STRING, allowNull: true})
  banReason: string
}