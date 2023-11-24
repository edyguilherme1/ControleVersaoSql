import { MeasurementRepository } from "../repositories/MeasurementRepository";

interface Request{
    teste_data_id:    number,
    time:             Date,
    phase:            String,
    marker:           String,
    vo2:              number,
    vo2_kg:           number,
    vo2_hr:           number,
    hr:               number,
    wr:               number,
    ve_vo2:           number,
    ve_vco2:          number,
    rer:              number,
    ve:               number,
    vt:               number,
    bf:               number,
    cho_oxyd:         number,
    fat_oxyd:         number,
    tmb:              number,
    vo2_v:            number
}

interface Response {
    teste_data_id:    number,
    time:             Date,
    phase:            String,
    marker:           String,
    vo2:              number,
    vo2_kg:           number,
    vo2_hr:           number,
    hr:               number,
    wr:               number,
    ve_vo2:           number,
    ve_vco2:          number,
    rer:              number,
    ve:               number,
    vt:               number,
    bf:               number,
    cho_oxyd:         number,
    fat_oxyd:         number,
    tmb:              number,
    vo2_v:            number
}

class CreateMeasurementService{
    public async execute({
        teste_data_id,
        time,
        phase,
        marker,
        vo2,
        vo2_kg,
        vo2_hr,
        hr,
        wr,
        ve_vo2,
        ve_vco2,
        rer,
        ve,
        vt,
        bf,
        cho_oxyd,
        fat_oxyd,
        tmb,
        vo2_v
    }: Request): Promise<Response> {
        const measurementrepository = new MeasurementRepository();
        const measurement = await measurementrepository.create({
            teste_data_id,
            time,
            phase,
            marker,
            vo2,
            vo2_kg,
            vo2_hr,
            hr,
            wr,
            ve_vo2,
            ve_vco2,
            rer,
            ve,
            vt,
            bf,
            cho_oxyd,
            fat_oxyd,
            tmb,
            vo2_v
        })
        return measurement
    }
}

export {CreateMeasurementService}