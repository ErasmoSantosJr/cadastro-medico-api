
import { MedicosService } from '../Service/medicos.service';
import { Medico } from '../Models/medico.model';
import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { NestResponse } from '../core/http/nest-response';
import { NestResponseBuilder } from '../core/http/nest-response-builder';

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
        const medicoObtido = this.medicoService.obterUm(params.id);

        if (! await medicoObtido) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Médico(a) não encontrado'
            });
        }

        return medicoObtido;
    }

    @Get('nome/:nome')
    async obterPorNome(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorNome(params.nome);

        if (! await medicoObtido) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Médico(a) não encontrado'
            });
        }

        return medicoObtido;
    }

    @Get('crm/:crm')
    async obterPorCRM(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorCRM(params.crm);

        if (! await medicoObtido) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Médico(a) não encontrado'
            });
        }

        return medicoObtido;
    }

    @Get('telefoneFixo/:telefoneFixo')
    async obterPorTelefoneFixo(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorTelefoneFixo(params.telefoneFixo);

        if (! await medicoObtido) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Médico(a) não encontrado'
            });
        }

        return medicoObtido;
    }

    @Get('telefoneCelular/:telefoneCelular')
    async obterPorTelefoneCelular(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorTelefoneCelular(params.telefoneCelular);

        if (! await medicoObtido) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Médico(a) não encontrado'
            });
        }

        return medicoObtido;
    }

    @Get('cep/:cep')
    async obterPorCep(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorCep(params.cep);

        if (! await medicoObtido) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Médico(a) não encontrado'
            });
        }

        return medicoObtido;
    }

    @Get('rua/:rua')
    async obterPorRua(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorRua(params.rua);

        if (! await medicoObtido) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Médico(a) não encontrado'
            });
        }

        return medicoObtido;
    }

    @Get('bairro/:bairro')
    async obterPorBairro(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorBairro(params.bairro);

        if (! await medicoObtido) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Médico(a) não encontrado'
            });
        }

        return medicoObtido;
    }

    @Get('cidade/:cidade')
    async obterPorCidade(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorCidade(params.cidade);

        if (! await medicoObtido) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Médico(a) não encontrado'
            });
        }

        return medicoObtido;
    }

    @Get('estado/:estado')
    async obterPorEstado(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorEstado(params.estado);

        if (! await medicoObtido) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Médico(a) não encontrado'
            });
        }

        return medicoObtido;
    }

    @Get('especialidade/:especialidade')
    async obterPorEspecialidade(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorEspecialidade(params.especialidade);

        if (! await medicoObtido) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Médico(a) não encontrado'
            });
        }

        return medicoObtido;
    }

    @Get('especialidadeSec/:especialidadeSec')
    async obterPorEspecialidadeSec(@Param() params): Promise<Medico[]> {
        const medicoObtido = this.medicoService.obterPorEspecialidadeSec(params.especialidadeSec);

        if (! await medicoObtido) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Médico(a) não encontrado'
            });
        }

        return medicoObtido;
    }

    @Post()
    async criar(@Body() medico: Medico): Promise<NestResponse> {

        const medicoCriado = this.medicoService.criar(medico);
        return new NestResponseBuilder()
            .comStatus(HttpStatus.CREATED)
            .comHeaders({
                'Location': `/users/${(await medicoCriado).nome}`
            })
            .comBody(await medicoCriado)
            .build();
    }

    @Put()
    async alterar(@Body() medico): Promise<[number, Medico[]]> {

        const medicoObtido = this.medicoService.alterar(medico);

        if (! await medicoObtido) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Médico(a) não encontrado'
            });
        }

        return medicoObtido;
    }

    @Delete(':id')
    async apagar(@Param() params) {
        return this.medicoService.apagar(params.id);
    }

}
