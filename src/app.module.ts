
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastroController } from './Controller/cadastro-controller';
import { Medico } from './Models/medico.model';
import { MedicosService } from './Service/medicos.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'dbHospital',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Medico])
  ],
  controllers: [AppController, CadastroController ],
  providers: [AppService, MedicosService],
})
export class AppModule {}
