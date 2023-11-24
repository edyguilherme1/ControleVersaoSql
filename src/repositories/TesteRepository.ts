import { teste, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ITeste{
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

class TesteRepository {
    public async create ({
        teste_data_id,
        variable,
        unit,
        rest,
        unloaded_pedalling,
        warm_up,
        vt1,
        vt1_perc_norm,
        vt1_perc_max,
        vo2peak,
        vo2peak_perc_norm,
        normal,
        absolute_maximum_values
    }: ITeste): Promise<teste> {
        const teste = await prisma.teste.create({
            data:{
                teste_data_id,
                variable,
                unit,
                rest,
                unloaded_pedalling,
                warm_up,
                vt1,
                vt1_perc_norm,
                vt1_perc_max,
                vo2peak,
                vo2peak_perc_norm,
                normal,
                absolute_maximum_values
            }
        })
        return teste
    }
}

export {TesteRepository}