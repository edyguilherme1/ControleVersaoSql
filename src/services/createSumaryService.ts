import {sumaryRepository } from "../repositories/SumaryRepository";

interface Request{
    patientId: number,
    rest: string,
    unload_pedaly: number,
    warm_up: Date,
    vt1: number,
    vt1_perc_normal:  number,
    vt1_per_max: number,
    vt2: number,
    vt2_perc_normal: number,
    vt2_perc_max: number,
    vo2peak: number,
    vo2peak_perc_max: number,
    Normal: number,
    absolute_maximus_values: number,
    id_variable: number
}

interface Response {
    patientId: number,
    rest: string,
    unload_pedaly: number,
    warm_up: Date,
    vt1: number,
    vt1_perc_normal:  number,
    vt1_per_max: number,
    vt2: number,
    vt2_perc_normal: number,
    vt2_perc_max: number,
    vo2peak: number,
    vo2peak_perc_max: number,
    Normal: number,
    absolute_maximus_values: number,
    id_variable: number
}

class CreateSumaryService{
    public async execute({
        patientId,
        rest,
        unload_pedaly,
        warm_up,
        vt1,
        vt1_perc_normal,
        vt1_per_max,
        vt2,
        vt2_perc_normal,
        vt2_perc_max,
        vo2peak,
        vo2peak_perc_max,
        Normal,
        absolute_maximus_values,
        id_variable
    }: Request): Promise<Response> {
        const sumaryrepository = new sumaryRepository();
        const sumary = await sumaryrepository.create({
            patientId,
            rest,
            unload_pedaly,
            warm_up,
            vt1,
            vt1_perc_normal,
            vt1_per_max,
            vt2,
            vt2_perc_normal,
            vt2_perc_max,
            vo2peak,
            vo2peak_perc_max,
            Normal,
            absolute_maximus_values,
            id_variable

        })
        return sumary
    }
}

export {CreateSumaryService}