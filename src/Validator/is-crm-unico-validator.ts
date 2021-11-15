import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { MedicosService } from "src/Service/medicos.service";
import { Injectable } from "@nestjs/common";


@Injectable()
@ValidatorConstraint()
export class IsCrmUnicoValid implements ValidatorConstraintInterface{
    
    constructor(private medicoService: MedicosService){}

    validate(crmDoMedico: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
         const retorno  = !!!this.medicoService.obterPorCRM(crmDoMedico);

         return retorno
    }
}

export function IsCrmUnico(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsCrmUnicoValid,
        });
    };
}