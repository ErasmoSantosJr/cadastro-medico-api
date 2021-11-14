
import { MedicosService } from '../Service/medicos.service';
import { Medico } from '../Models/medico.model';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('cadastro')
export class CadastroController {

    constructor(private medicoService: MedicosService) {

    }

    @Get()
    async obterTodos(): Promise<Medico[]> {
        return this.medicoService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Medico> {
        return this.medicoService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() medico: Medico) {
        this.medicoService.criar(medico);
    }

    @Put()
    async alterar(@Body() medico): Promise<[number, Medico[]]> {
        return this.medicoService.alterar(medico);
    }

    @Delete(':id')
    async apagar(@Param() params) {
        return this.medicoService.apagar(params.id);
    }

}
