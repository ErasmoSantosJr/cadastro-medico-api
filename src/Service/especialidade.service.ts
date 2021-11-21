import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Especialidade } from "../Models/especialidade.model";

@Injectable()
export class EspecialidadeService {

    constructor(
        @InjectModel(Especialidade)
        private especialidadeModel: typeof Especialidade
    ) { }

    async obterTodos(): Promise<Especialidade[]> {
        return this.especialidadeModel.findAll({
            where: {
                ativo: 1
            }
        });
    }

    async criar(especialidade: Especialidade): Promise<Especialidade> {
        especialidade.ativo = 1;

        this.especialidadeModel.create(especialidade);

        return especialidade;
    }
}