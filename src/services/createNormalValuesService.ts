import { NormalValuesRepository } from "../repositories/NormalValuesRepository";

interface Request{
    patient_Id:                  number,
    max_oxi_uptake:              string,
    max_relative_oxi_uptake:     string,
    max_oxy_pulse:               string,
    max_heart_rate:              string,
    max_minute_ventilation:      String,
    max_breathing_frequency:     String,
    max_work_rate:               String,
    max_arterial_blood_pressure: String,
    spirometry_normal_value_set: String,
    lbw:                         number,
    ic:                          number,
    vc:                          number,
    fev1:                        number
}

interface Response {
    patient_Id:                  number,
    max_oxi_uptake:              string,
    max_relative_oxi_uptake:     string,
    max_oxy_pulse:               string,
    max_heart_rate:              string,
    max_minute_ventilation:      String,
    max_breathing_frequency:     String,
    max_work_rate:               String,
    max_arterial_blood_pressure: String,
    spirometry_normal_value_set: String,
    lbw:                         number,
    ic:                          number,
    vc:                          number,
    fev1:                        number
}

class CreateNormalValueService{
    public async execute({
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
    }: Request): Promise<Response> {
        const normalvaluerepository = new NormalValuesRepository();
        const normalValue = await normalvaluerepository.create({
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
        })
        return normalValue
    }
}

export {CreateNormalValueService}