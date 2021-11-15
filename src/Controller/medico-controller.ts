
import { MedicosService } from '../Service/medicos.service';
import { Medico } from '../Models/medico.model';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('medico')
export class MedicoController {

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

    @Get('nome/:nome')
    async obterPorNome(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorNome(params.nome);

        return medicoObtido;
    }

    @Get('crm/:crm')
    async obterPorCRM(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorCRM(params.crm);

        return medicoObtido;
    }

    @Get('telefoneFixo/:telefoneFixo')
    async obterPorTelefoneFixo(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorTelefoneFixo(params.telefoneFixo);

        return medicoObtido;
    }

    @Get('telefoneCelular/:telefoneCelular')
    async obterPorTelefoneCelular(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorTelefoneCelular(params.telefoneCelular);

        return medicoObtido;
    }

    @Get('cep/:cep')
    async obterPorCep(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorCep(params.cep);

        return medicoObtido;
    }

    @Get('rua/:rua')
    async obterPorRua(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorRua(params.rua);

        return medicoObtido;
    }

    @Get('bairro/:bairro')
    async obterPorBairro(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorBairro(params.bairro);

        return medicoObtido;
    }

    @Get('cidade/:cidade')
    async obterPorCidade(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorCidade(params.cidade);

        return medicoObtido;
    }

    @Get('estado/:estado')
    async obterPorEstado(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorEstado(params.estado);

        return medicoObtido;
    }

    @Get('especialidade/:especialidade')
    async obterPorEspecialidade(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorEspecialidade(params.especialidade);

        return medicoObtido;
    }

    @Get('especialidadeSec/:especialidadeSec')
    async obterPorEspecialidadeSec(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorEspecialidadeSec(params.especialidadeSec);

        return medicoObtido;
    }

    @Post()
    async criar(@Body() medico: Medico): Promise<Medico> {
        const medicoCriado = this.medicoService.criar(medico);

        return medicoCriado;
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
