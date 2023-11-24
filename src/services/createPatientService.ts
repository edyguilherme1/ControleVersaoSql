import { PatientRepository } from "../repositories/PatientRepository";

interface Request{
    title:         String,
    first_name:    String,
    last_name:     String,
    name_addition: String
    sex:           String,
    birthdate:     Date
}

interface Response {
    title:         String,
    first_name:    String,
    last_name:     String,
    name_addition: String
    sex:           String,
    birthdate:     Date
}

class CreatePatientService{
    public async execute({
        title,
        first_name,
        last_name,
        name_addition,
        sex,
        birthdate
    }: Request): Promise<Response> {
        const patientrepository = new PatientRepository();
        const patient = await patientrepository.create({
            title,
            first_name,
            last_name,
            name_addition,
            sex,
            birthdate
        })
        return patient
    }
}

export {CreatePatientService}