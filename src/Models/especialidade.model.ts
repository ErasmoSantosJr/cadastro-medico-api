import { Exclude } from "class-transformer";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Especialidade extends Model<Especialidade> {

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  })
  id: number

  @Column({
    type: DataType.STRING(120),
    allowNull: false,
  })
  @IsNotEmpty({
    message: 'O parâmetro nome é obrigatório'
  })
  @IsString({
    message: 'O parâmetro nome tem que ser enviado como uma String'
  })
  @MaxLength(120, {
    message: 'O número máximo permitido para o parâmetro nome é de 120 caracteres',
  })
  nome: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @Exclude({
    toPlainOnly: true
  })
  ativo: number;
}