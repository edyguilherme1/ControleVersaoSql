import { teste_data, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ITesteData{
    patient_Id:          number,
    start_time:          Date,
    duration:            Date,
    cpet_device:         String,
    serial_number:       number,
    firmware_version:    String,
    flow_sensor:         String,
    temperature:         number,
    barometric_pressure: number,
    humidity:            number,
}

class TesteDataRepository {
    public async create ({
        patient_Id,
        start_time,
        duration,
        cpet_device,
        serial_number,
        firmware_version,
        flow_sensor,
        temperature,
        barometric_pressure,
        humidity
    }: ITesteData): Promise<teste_data> {
        const teste_data = await prisma.teste_data.create({
            data:{
                patient_Id,
                start_time,
                duration,
                cpet_device,
                serial_number,
                firmware_version,
                flow_sensor,
                temperature,
                barometric_pressure,
                humidity
            }
        })
        return teste_data
    }
}

export {TesteDataRepository}