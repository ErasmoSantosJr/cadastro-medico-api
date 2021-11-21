
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FiltroDeExcecaoHttp } from './Common/filtro/filtro-de-excecao-http.filter';
import { EspecialidadeController } from './Controller/especialidade-controller';
import { MedicoController } from './Controller/medico-controller';
import { TransformaRespostaInterceptor } from './core/http/transforma-resposta-interceptador';
import { Especialidade } from './Models/especialidade.model';
import { Medico } from './Models/medico.model';
import { EspecialidadeService } from './Service/especialidade.service';
import { MedicosService } from './Service/medicos.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'database',
      port: 3306,
      username: 'api_aplicacao',
      password: '12345678',
      database: 'dbhospital',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Especialidade]),
    SequelizeModule.forFeature([Medico])
  ],
  controllers: [AppController, EspecialidadeController, MedicoController ],

  providers: [
    {
      provide: APP_FILTER,
      useClass: FiltroDeExcecaoHttp 
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformaRespostaInterceptor 
    },
    AppService,
    MedicosService,
    EspecialidadeService],
})
export class AppModule { }
