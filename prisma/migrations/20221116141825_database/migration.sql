-- Reset session variables
RESET client_min_messages;

-- Create schema ADA
CREATE SCHEMA IF NOT EXISTS ADA;

-- Set search path to ADA schema
SET search_path TO ADA;

-- Create table ADA.patient
CREATE TABLE IF NOT EXISTS ADA.patient (
  id_patient SERIAL PRIMARY KEY,
  title VARCHAR(255),
  first_name VARCHAR(45),
  last_name VARCHAR(100),
  name_addition VARCHAR(255),
  sex VARCHAR(1),
  date_birth DATE
);

-- Create table ADA.biological
CREATE TABLE IF NOT EXISTS ADA.biological (
  id_biological SERIAL PRIMARY KEY,
  patient_id INT NOT NULL,
  height DECIMAL(3,2),
  weight DECIMAL(3,2),
  mask VARCHAR(45),
  race VARCHAR(45),
  body_fat DECIMAL(3,2),
  hip_waist_ratio DECIMAL(3,2),
  bmi INT,
  estimated_fitness_level DECIMAL(3,2),
  bsa DECIMAL(3,2),
  hct INT,
  hb INT,
  changes_heart_rate DECIMAL(3,2),
  medication VARCHAR(45),
  existing_medical_conditions VARCHAR(45),
  CONSTRAINT fk_biological_patient
    FOREIGN KEY (patient_id)
    REFERENCES ADA.patient (id_patient)
);

-- Create table ADA.normal_values
CREATE TABLE IF NOT EXISTS ADA.normal_values (
  id_normal_values SERIAL PRIMARY KEY,
  patient_id INT NOT NULL,
  max_oxi_uptake VARCHAR(45),
  max_relative_oxi_uptake VARCHAR(45),
  max_oxy_pulse VARCHAR(45),
  max_heart_rate VARCHAR(45),
  max_minute_ventilation VARCHAR(45),
  max_breathing_frequency VARCHAR(45),
  max_work_rate VARCHAR(45),
  max_arterial_blood_pressure VARCHAR(45),
  spirometry_normal_value_set VARCHAR(45),
  lbw DECIMAL(3,2),
  ic DECIMAL(3,2),
  vc DECIMAL(3,2),
  fev1 DECIMAL(3,2),
  CONSTRAINT fk_normal_values_patient
    FOREIGN KEY (patient_id)
    REFERENCES ADA.patient (id_patient)
);

-- Create table ADA.teste_data
CREATE TABLE IF NOT EXISTS ADA.teste_data (
  id_test_data SERIAL PRIMARY KEY,
  patient_id INT NOT NULL,
  start_time TIMESTAMP,
  duration INTERVAL,
  cpet_device VARCHAR(45),
  serial_number INT,
  firmware_version VARCHAR(45),
  flow_sensor VARCHAR(45),
  temperature DECIMAL(3,2),
  barometric_pressure DECIMAL(3,2),
  humidity DECIMAL(3,2),
  CONSTRAINT fk_teste_data_patient
    FOREIGN KEY (patient_id)
    REFERENCES ADA.patient (id_patient)
);

CREATE TABLE ADA.sumary (
  id_sumary SERIAL PRIMARY KEY,
  rest VARCHAR(45),
  unload_pedaly DECIMAL(3,2),
  warm_up TIME,
  vt1 DECIMAL(3,2),
  vt1_perc_normal INT,
  vt1_perc_max INT,
  vt2 DECIMAL(4,2),
  vt2_perc_normal INT,
  vt2_perc_max INT,
  vo2peak DECIMAL(3,2),
  vo2peak_perc_max INT,
  "Normal" DECIMAL(3,2),
  absolute_maximus_values DECIMAL(3,2),
  id_variable INT NOT NULL,
  id_patient INT NOT NULL,
  CONSTRAINT fk_id_patient
    FOREIGN KEY (id_patient)
    REFERENCES ADA.patient (id_patient),
  CONSTRAINT fk_id_variable
    FOREIGN KEY (id_variable)
    REFERENCES ADA.variable (id_variable)
);