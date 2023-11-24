import { normal_values, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface INormalValues{
    patient_Id: number,
    max_oxi_uptake:string,
    max_relative_oxi_uptake:string,
    max_oxy_pulse:string,
    max_heart_rate:string,
    max_minute_ventilation:String,
  max_breathing_frequency:     String,
  max_work_rate:               String,
  max_arterial_blood_pressure: String,
  spirometry_normal_value_set: String,
  lbw:                         number,
  ic:                          number,
  vc:                          number,
  fev1:                        number
}

class NormalValuesRepository {
    public async create ({
        patient_Id,
        max_oxi_uptake,
        max_relative_oxi_uptake,
        max_oxy_pulse,
        max_heart_rate,
        max_minute_ventilation,
        max_breathing_frequency,
        max_work_rate,
        max_arterial_blood_pressure,
        spirometry_normal_value_set,
        lbw,
        ic,
        vc,
        fev1
    }: INormalValues): Promise<normal_values> {
        const normal_values = await prisma.normal_values.create({
            data:{
                patient_Id,
                max_oxi_uptake,
                max_relative_oxi_uptake,
                max_oxy_pulse,
                max_heart_rate,
                max_minute_ventilation,
                max_breathing_frequency,
                max_work_rate,
                max_arterial_blood_pressure,
                spirometry_normal_value_set,
                lbw,
                ic,
                vc,
                fev1
            }
        })
        return normal_values
    }
}

export {NormalValuesRepository}