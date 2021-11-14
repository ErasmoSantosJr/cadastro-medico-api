
import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Medico } from "../Models/medico.model";

@Injectable()
export class MedicosService {
    constructor(
        @InjectModel(Medico)
        private medicoModel: typeof Medico
    ) { }

    async obterTodos(): Promise<Medico[]> {
        return this.medicoModel.findAll();
    }

    async obterUm(id: number): Promise<Medico> {
        return this.medicoModel.findByPk(id);
    }

    async criar(medico: Medico) {
        this.medicoModel.create(medico);
    }

    async alterar(medico: Medico): Promise<[number, Medico[]]> {
        return this.medicoModel.update(medico, {
            where: {
                id: medico.id
            }
        });
    }

    async apagar(id: number) {
        const medico: Medico = await this.obterUm(id);
        medico.destroy();
    }

}