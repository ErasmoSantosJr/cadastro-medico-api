
import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Medico } from "../Models/medico.model";
import api from "./correios.service";

@Injectable()
export class MedicosService {

    constructor(
        @InjectModel(Medico)
        private medicoModel: typeof Medico
    ) { }

    async obterTodos(): Promise<Medico[]> {
        return this.medicoModel.findAll({
            where: {
                ativo: 1
            }
        });
    }

    async obterUm(id: number): Promise<Medico> {
        const { Op } = require("sequelize");

        const medicoObtido: Medico = await this.medicoModel.findOne({
            where: {
                id: id,
                ativo: 1,
            }
        });

        return medicoObtido;
    }

    async obterPorNome(NomeDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                [Op.and]: [{
                    nome: {
                        [Op.like]: `%${NomeDoMedico}%`
                    },
                    ativo: 1
                }]
            }
        });
    }

    async obterPorCRM(crmDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                [Op.and]: [{
                    crm: {
                        [Op.like]: `%${crmDoMedico}%`
                    },
                    ativo: 1
                }]
            }
        });
    }

    async obterPorTelefoneFixo(TelefoneFixoDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                [Op.and]: [{
                    TelefoneFixo: {
                        [Op.like]: `%${TelefoneFixoDoMedico}%`
                    },
                    ativo: 1
                }]
            }
        });
    }

    async obterPorTelefoneCelular(TelefoneCelularDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                [Op.and]: [{
                    TelefoneCelular: {
                        [Op.like]: `%${TelefoneCelularDoMedico}%`
                    },
                    ativo: 1
                }]
            }
        });
    }

    async obterPorCep(CepDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                [Op.and]: [{
                    cep: {
                        [Op.like]: `%${CepDoMedico}%`
                    },
                    ativo: 1
                }]
            }
        });
    }

    async obterPorRua(RuaDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                [Op.and]: [{
                    rua: {
                        [Op.like]: `%${RuaDoMedico}%`
                    },
                    ativo: 1
                }]
            }
        });
    }

    async obterPorBairro(BairroDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                [Op.and]: [{
                    bairro: {
                        [Op.like]: `%${BairroDoMedico}%`
                    },
                    ativo: 1
                }]
            }
        });
    }

    async obterPorCidade(CidadeDoMedico: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                [Op.and]: [{
                    cidade: {
                        [Op.like]: `%${CidadeDoMedico}%`
                    },
                    ativo: 1
                }]
            }
        });
    }

    async obterPorEstado(CidadeDoEstado: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                [Op.and]: [{
                    estado: {
                        [Op.like]: `%${CidadeDoEstado}%`
                    },
                    ativo: 1
                }]
            }
        });
    }

    async obterPorEspecialidade(EspecialidadeDoEstado: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                [Op.and]: [{
                    especialidade: {
                        [Op.like]: `%${EspecialidadeDoEstado}%`
                    },
                    ativo: 1
                }]
            }
        });
    }

    async obterPorEspecialidadeSec(EspecialidadeSecDoEstado: string): Promise<Medico[]> {
        const { Op } = require("sequelize");
        return this.medicoModel.findAll({
            where: {
                [Op.and]: [{
                    especialidadeSec: {
                        [Op.like]: `%${EspecialidadeSecDoEstado}%`
                    },
                    ativo: 1
                }]
            }
        });
    }

    async criar(medico: Medico): Promise<Medico> {
        medico.ativo = 1;

        await api.get(`https://viacep.com.br/ws/${medico.cep}/json`)
            .then((response) => {
                medico.rua = response.data.logradouro,
                    medico.bairro = response.data.bairro,
                    medico.estado = response.data.localidade,
                    medico.cidade = response.data.uf
            }
            )
            .catch(() => {
                throw new NotFoundException({
                    statusCode: HttpStatus.NOT_FOUND,
                    message: 'Não foi localizado nenhum endereço com o CEP informado'
                });
            });

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

    async apagar(id: number): Promise<Medico> {

        const medicoObtido: Medico = await this.obterUm(id);

        if (medicoObtido) {
            if (medicoObtido.ativo == 1) {
                this.medicoModel.update({ ativo: 0 },
                    {
                        where: {
                            id: medicoObtido.id
                        }
                    });
                return medicoObtido;
            } 
        }

    }
}