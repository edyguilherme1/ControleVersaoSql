import { biological, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Ibiological{
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

class biologicalRepository{
    public async create({
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

    }:Ibiological): Promise<biological>{
        const biological = await prisma.biological.create({
            data:{
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
            }
        })
        return biological
    }
}

export {biologicalRepository}