import { patient, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IPatients{
    title: String,
    first_name:String,
    last_name:String,
    name_addition:String
    sex:String,
    birthdate:Date
}

class PatientRepository {
    public async create ({
        title,
        first_name,
        last_name,
        name_addition,
        sex,
        birthdate
    }: IPatients): Promise<patient> {
        const patient = await prisma.patient.create({
            data:{
                title,
                first_name,
                last_name,
                name_addition,
                sex,
                birthdate
            }
        })
        return patient
    }
}

export {PatientRepository}