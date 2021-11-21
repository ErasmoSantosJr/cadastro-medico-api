import { EspecialidadeService } from "../Service/especialidade.service";
import { NestResponseBuilder } from "../core/http/nest-response-builder";
import { Especialidade } from "../Models/especialidade.model";
import { Body, Controller, Get, HttpStatus, Post } from "@nestjs/common";
import { NestResponse } from "../core/http/nest-response";

@Controller('especialidade')
export class EspecialidadeController {

    constructor(private especialidadeService: EspecialidadeService) {

    }

    @Get()
    async obterTodos(): Promise<Especialidade[]> {
        return this.especialidadeService.obterTodos();
    }

    @Post()
    async criar(@Body() especialidade: Especialidade): Promise<NestResponse> {

        const especialidadeCriada = this.especialidadeService.criar(especialidade);
        return new NestResponseBuilder()
            .comStatus(HttpStatus.CREATED)
            .comHeaders({
                'Location': `/users/${(await especialidadeCriada).nome}`
            })
            .comBody(await especialidadeCriada)
            .build();
    }
}