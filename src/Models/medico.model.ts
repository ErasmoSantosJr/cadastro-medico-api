import { Exclude } from "class-transformer";
import { IsNotEmpty, IsString, MaxLength, Min, MinLength } from "class-validator";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Medico extends Model<Medico> {

  @Column({
    type: DataType.STRING(7),
    allowNull: false,
  })
  @IsNotEmpty({
    message: 'O parâmetro crm é obrigatório'
  })
  @IsString({
    message: 'O parâmetro crm tem que ser enviado como uma String'
  })
  @MaxLength(7, {
    message: 'O número máximo permitido para o parâmetro crm é de 7 caracteres',
  })
  crm: string;


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
    type: DataType.STRING(11),
    allowNull: false,
  })
  @IsNotEmpty({
    message: 'O parâmetro telefoneFixo é obrigatório'
  })
  @IsString({
    message: 'O parâmetro telefoneFixo tem que ser enviado como uma String'
  })
  @MinLength(11, {
    message: 'O número mínimo permitido para o parâmetro telefoneFixo é de 11 caracteres',
  })
  @MaxLength(11, {
    message: 'O número máximo permitido para o parâmetro telefoneFixo é de 11 caracteres',
  })
  telefoneFixo: string;

  @Column({
    type: DataType.STRING(11),
    allowNull: false,
  })
  @IsNotEmpty({
    message: 'O parâmetro telefoneCelular é obrigatório'
  })
  @IsString({
    message: 'O parâmetro telefoneCelular tem que ser enviado como uma String'
  })
  @MinLength(11, {
    message: 'O número mínimo permitido para o parâmetro telefoneCelular é de 11 caracteres',
  })
  @MaxLength(11, {
    message: 'O número máximo permitido para o parâmetro telefoneCelular é de 11 caracteres',
  })
  telefoneCelular: string;

  @Column({
    type: DataType.STRING(8),
    allowNull: false,
  })
  @IsNotEmpty({
    message: 'O parâmetro cep é obrigatório'
  })
  @IsString({
    message: 'O parâmetro cep tem que ser enviado como uma String'
  })
  @MinLength(8, {
    message: 'O número mínimo permitido para o parâmetro cep é de 8 caracteres',
  })
  @MaxLength(8, {
    message: 'O número máximo permitido para o parâmetro cep é de 8 caracteres',
  })
  cep: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  rua: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bairro: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cidade: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  estado: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @IsNotEmpty({
    message: 'O parâmetro especialidade é obrigatório'
  })
  especialidade: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @IsNotEmpty({
    message: 'O parâmetro especialidadeSec é obrigatório'
  })
  especialidadeSec: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @Exclude({
    toPlainOnly: true
  })
  ativo: number;
}


