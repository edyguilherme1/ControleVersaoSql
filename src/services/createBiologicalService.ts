import { biologicalRepository } from "../repositories/BiologicalRepository";

interface Request{
    patientId: number,
    height: number,
    weight: number,
    mask: string,
    race: string,
    body_fat: number,
    hip_waist_ratio: number,
    bmi: number,
    estimated_fitness_level: number,
    bsa: number,
    hct: number,
    hb: number,
    changes_heart_rate: number,
    medication: string,
    existing_medical_conditions: string
}

interface Response {
    patientId: number,
    height: number,
    weight: number
    mask: string,
    race: string,
    body_fat: number,
    hip_waist_ratio: number,
    bmi: number,
    estimated_fitness_level: number,
    bsa: number,
    hct: number,
    hb: number,
    changes_heart_rate: number,
    medication: string,
    existing_medical_conditions: string
}

class CreateBiologicalService{
    public async execute({
        patientId,
        height,
        weight,
        mask,
        race,
        body_fat,
        hip_waist_ratio,
        bmi,
        estimated_fitness_level,
        bsa,
        hct,
        hb,
        changes_heart_rate,
        medication,
        existing_medical_conditions
    }: Request): Promise<Response> {
        const biologicalrepository = new biologicalRepository();
        const biological = await biologicalrepository.create({
            patientId,
            height,
            weight,
            mask,
            race,
            body_fat,
            hip_waist_ratio,
            bmi,
            estimated_fitness_level,
            bsa,
            hct,
            hb,
            changes_heart_rate,
            medication,
            existing_medical_conditions 
        })
        return biological
    }
}

export {CreateBiologicalService}