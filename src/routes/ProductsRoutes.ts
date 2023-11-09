import { Router } from "express";
import { CreateBiologicalService } from "../services/createBiologicalService";
import { CreateMeasurementService } from "../services/createMeasurementService";
import { CreateNormalValueService } from "../services/createNormalValuesService";
import { CreateTesteDataService } from "../services/createTesteDataService";
import { CreatePatientService } from "../services/createPatientService";
import { CreateTesteService } from "../services/createTesteService";

const ImportRouter = Router();

ImportRouter.post('/create', async (request, response) =>{
    const {
        ID,
       Title,
       LastName,
       FirstName,
       name_addition,
       Sex,
       DateofBirth,
       Height,
       Weight,
       Mask,
       Race,
       BodyFat,
       HipWaistRatio,
       BMI,
       EStimatedFitnessLevel,
       BSA,
       Hct,
       Hb,
       ChangesHeartRate,
       Medication,
       ExistingMedicalConditions,
       MaximumOxygenUptake,
       MaximumRelativeOxygen,
       MaximumOxygenPulse,
       MaximumHeartRate,
       MaximumMinuteFrequency,
       MaximumBreathingFrequency,
       MaximumWorkRate,
       MaximumArterialBloodPressure,
       SpirometryNormalValueSet,
       LBW,
       IC,
       VC,
       FEV1,
       StartTime,
       Duration,
       CPETdevice,
       Serialnumber,
       FirmwareVersion,
       FlowSensor,
       Temperature,
       Barometric,
       Humidity,
       t,
       Phase,
       Marker,
       VO2,
       VO2Kg,
       VO2HR,
       HR,
       WR,
       VEVO2,
       VEVCO2,
       RER,
       VE,
       VT,
       BF,
       CHOOxyd,
       FatOxyd,
       TMB,
       VO2v,
       teste_data_id,
       Variable,
       Unit,
       Rest,
       UnloadedPedalling,
       WarmUp,
       VT1,
       VT1PercNorm,
       VT1PercMax,
       VT2,
       VT2PercNorm,
       VT2PercMax,
       VO2Peak,
       VO2PeakPercNorm,
       Normal,
       AbsoluteMaximumValues
    } = request.body;
    
    const createpatientservice = new CreatePatientService();
    const createbiologicalservice = new CreateBiologicalService();
    const createnormalvaluesservice = new CreateNormalValueService();
    const createtestedataservice = new CreateTesteDataService();
    const createmeasurementservice = new CreateMeasurementService();
    const createtesteservice = new CreateTesteService();

    try {
        const patient = await createpatientservice.execute({
            title:         Title,
            first_name:    FirstName,
            last_name:     LastName,
            name_addition: name_addition,
            sex:           Sex,
            birthdate:     DateofBirth
        })

        const biological = await createbiologicalservice.execute({
            patientId: ID,
            height: Height,
            weight: Weight,
            mask: Mask,
            race: Race,
            body_fat: BodyFat,
            hip_waist_ratio: HipWaistRatio,
            bmi: BMI,
            estimated_fitness_level: EStimatedFitnessLevel,
            bsa: BSA,
            hct: Hct,
            hb: Hb,
            changes_heart_rate: ChangesHeartRate,
            medication: Medication,
            existing_medical_conditions: ExistingMedicalConditions
        })

        const normalvalues = await createnormalvaluesservice.execute({
            patient_Id:                  ID,
            max_oxi_uptake:              MaximumOxygenPulse,
            max_relative_oxi_uptake:     MaximumRelativeOxygen,
            max_oxy_pulse:               MaximumOxygenPulse,
            max_heart_rate:              MaximumHeartRate,
            max_minute_ventilation:      MaximumMinuteFrequency,
            max_breathing_frequency:     MaximumBreathingFrequency,
            max_work_rate:               MaximumWorkRate,
            max_arterial_blood_pressure: MaximumArterialBloodPressure,
            spirometry_normal_value_set: SpirometryNormalValueSet,
            lbw:                         LBW,
            ic:                          IC,
            vc:                          VC,
            fev1:                        FEV1
        })

        const testedata = await createtestedataservice.execute({
            patient_Id:          ID,
            start_time:          StartTime,
            duration:            Duration,
            cpet_device:         CPETdevice,
            serial_number:       Serialnumber,
            firmware_version:    FirmwareVersion,
            flow_sensor:         FlowSensor,
            temperature:         Temperature,
            barometric_pressure: Barometric,
            humidity:            Humidity,
        })

        const measurement = await createmeasurementservice.execute({
            teste_data_id,
            time:             t,
            phase:            Phase,
            marker:           Marker,
            vo2:              VO2,
            vo2_kg:           VO2Kg,
            vo2_hr:           VO2HR,
            hr:               HR,
            wr:               WR,
            ve_vo2:           VEVO2,
            ve_vco2:          VEVCO2,
            rer:              RER,
            ve:               VE,
            vt:               VT,
            bf:               BF,
            cho_oxyd:         CHOOxyd,
            fat_oxyd:         FatOxyd,
            tmb:              TMB,
            vo2_v:            VO2v
        })

        const teste = await createtesteservice.execute({
            teste_data_id,
            variable:                Variable,
            unit:                    Unit,
            rest:                    Rest,
            unloaded_pedalling:      UnloadedPedalling,
            warm_up:                 WarmUp,
            vt1:                     VT1,
            vt1_perc_norm:           VT1PercNorm,
            vt1_perc_max:            VT1PercMax,
            vt2:                     VT2,
            vt2_per_norm:            VT2PercNorm,
            vt2_perc_max:            VT2PercMax,
            vo2peak:                 VO2Peak,
            vo2peak_perc_norm:       VO2PeakPercNorm,
            normal:                  Normal,
            absolute_maximum_values: AbsoluteMaximumValues
        })

        return response.status(200).json(patient, biological, normalvalues, testedata, measurement, teste)
    } catch (error) {
        return response.status(400)
    }



})

export {ImportRouter}