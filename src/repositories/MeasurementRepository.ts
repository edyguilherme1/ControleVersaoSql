import { measurement, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IMeasurement{
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

class MeasurementRepository {
    public async create ({
        teste_data_id,
        time,
        phase,
        marker,
        vo2,
        vo2_kg,
        vo2_hr,
        hr,
        wr,
        ve_vco2,
        ve_vo2,
        rer,
        ve,
        vt,
        bf,
        cho_oxyd,
        fat_oxyd,
        tmb,
        vo2_v
    }: IMeasurement): Promise<measurement> {
        const measurement = await prisma.measurement.create({
            data:{
                teste_data_id,
                time,
                phase,
                marker,
                vo2,
                vo2_kg,
                vo2_hr,
                hr,
                wr,
                ve_vco2,
                ve_vo2,
                rer,
                ve,
                vt,
                bf,
                cho_oxyd,
                fat_oxyd,
                tmb,
                vo2_v
            }
        })
        return measurement
    }
}

export {MeasurementRepository}