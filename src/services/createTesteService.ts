import { TesteRepository } from "../repositories/TesteRepository";

interface Request{
    teste_data_id:           number,
    variable:                String,
    unit:                    String,
    rest:                    String,
    unloaded_pedalling:      number,
    warm_up:                 Date,
    vt1:                     number,
    vt1_perc_norm:           number,
    vt1_perc_max:            number,
    vt2:                     number,
    vt2_per_norm:            number,
    vt2_perc_max:            number,
    vo2peak:                 number,
    vo2peak_perc_norm:       number,
    normal:                  number,
    absolute_maximum_values: number
}

interface Response {
    teste_data_id:           number,
    variable:                String,
    unit:                    String,
    rest:                    String,
    unloaded_pedalling:      number,
    warm_up:                 Date,
    vt1:                     number,
    vt1_perc_norm:           number,
    vt1_perc_max:            number,
    vt2:                     number,
    vt2_per_norm:            number,
    vt2_perc_max:            number,
    vo2peak:                 number,
    vo2peak_perc_norm:       number,
    normal:                  number,
    absolute_maximum_values: number
}

class CreateTesteService{
    public async execute({
        teste_data_id,
        variable,
        unit,
        rest,
        unloaded_pedalling,
        warm_up,
        vt1,
        vt1_perc_norm,
        vt1_perc_max,
        vt2,
        vt2_per_norm,
        vt2_perc_max,
        vo2peak,
        vo2peak_perc_norm,
        normal,
        absolute_maximum_values
    }: Request): Promise<Response> {
        const testerepository = new TesteRepository();
        const teste = await testerepository.create({
            teste_data_id,
            variable,
            unit,
            rest,
            unloaded_pedalling,
            warm_up,
            vt1,
            vt1_perc_norm,
            vt1_perc_max,
            vt2,
            vt2_per_norm,
            vt2_perc_max,
            vo2peak,
            vo2peak_perc_norm,
            normal,
            absolute_maximum_values
        })
        return teste
    }
}

export {CreateTesteService}