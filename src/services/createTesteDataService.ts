import { TesteDataRepository } from "../repositories/TesteDataRepository";

interface Request{
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

interface Response {
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

class CreateTesteDataService{
    public async execute({
        patient_Id,
        start_time,
        duration,
        cpet_device,
        serial_number,
        firmware_version,
        flow_sensor,
        temperature,
        barometric_pressure,
        humidity,
    }: Request): Promise<Response> {
        const testedatarepository = new TesteDataRepository();
        const patient = await testedatarepository.create({
            patient_Id,
            start_time,
            duration,
            cpet_device,
            serial_number,
            firmware_version,
            flow_sensor,
            temperature,
            barometric_pressure,
            humidity,
        })
        return patient
    }
}

export {CreateTesteDataService}