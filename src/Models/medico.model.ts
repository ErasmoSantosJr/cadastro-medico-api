import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Medico extends Model<Medico> {

  @Column({
    type: DataType.STRING(7),
    allowNull: false,
  })
  crm: string;

  @Column({
    type: DataType.STRING(120),
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.STRING(11),
    allowNull: false,
  })
  telefone: string;

  @Column({
    type: DataType.STRING(8),
    allowNull: false,
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
  especialidade: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  especialidadeSec: number;
}


