
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

    async obterPorNome(NomeDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                nome: {
                    [Op.like]: `%${NomeDoMedico}%`
                }
            }
        });
    }

    async obterPorCRM(crmDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                crm: {
                    [Op.like]: `%${crmDoMedico}%`
                }
            }
        });
    }

    async obterPorTelefoneFixo(TelefoneFixoDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                TelefoneFixo: {
                    [Op.like]: `%${TelefoneFixoDoMedico}%`
                }
            }
        });
    }

    async obterPorTelefoneCelular(TelefoneCelularDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                TelefoneCelular: {
                    [Op.like]: `%${TelefoneCelularDoMedico}%`
                }
            }
        });
    }

    async obterPorCep(CepDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                cep: {
                    [Op.like]: `%${CepDoMedico}%`
                }
            }
        });
    }

    async obterPorRua(RuaDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                rua: {
                    [Op.like]: `%${RuaDoMedico}%`
                }
            }
        });
    }

    async obterPorBairro(BairroDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                bairro: {
                    [Op.like]: `%${BairroDoMedico}%`
                }
            }
        });
    }

    async obterPorCidade(CidadeDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                cidade: {
                    [Op.like]: `%${CidadeDoMedico}%`
                }
            }
        });
    }

    async obterPorEstado(CidadeDoEstado: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                estado: {
                    [Op.like]: `%${CidadeDoEstado}%`
                }
            }
        });
    }

    async obterPorEspecialidade(EspecialidadeDoEstado: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                especialidade: {
                    [Op.like]: `%${EspecialidadeDoEstado}%`
                }
            }
        });
    }

    async obterPorEspecialidadeSec(EspecialidadeSecDoEstado: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                especialidadeSec: {
                    [Op.like]: `%${EspecialidadeSecDoEstado}%`
                }
            }
        });
    }

    async criar(medico: Medico): Promise<Medico> {
        this.medicoModel.create(medico);

        return medico;
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