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

-- Create table ADA.teste
CREATE TABLE IF NOT EXISTS ADA.teste (
  id_teste SERIAL PRIMARY KEY,
  teste_data_id INT NOT NULL,
  variable VARCHAR(15),
  unit VARCHAR(15),
  rest VARCHAR(45),
  unloaded_pedalling DECIMAL(3,2),
  warm_up INTERVAL,
  vt1 DECIMAL(3,2),
  vt1_perc_norm INT,
  vt1_perc_max INT,
  vt2 DECIMAL(3,2),
  vt2_per_norm INT,
  vt2_perc_max INT,
  vo2peak DECIMAL(3,2),
  vo2peak_perc_norm INT,
  normal DECIMAL(3,2),
  absolute_maximum_values DECIMAL(3,2),
  CONSTRAINT fk_teste_teste_data
    FOREIGN KEY (teste_data_id)
    REFERENCES ADA.teste_data (id_test_data)
);

-- Create table ADA.measurement
CREATE TABLE IF NOT EXISTS ADA.measurement (
  id_measurement SERIAL PRIMARY KEY,
  teste_data_id INT NOT NULL,
  time INTERVAL,
  phase VARCHAR(45),
  marker VARCHAR(45),
  vo2 DECIMAL(3,2),
  vo2_kg DECIMAL(3,2),
  vo2_hr INT,
  hr INT,
  wr INT,
  ve_vo2 DECIMAL(3,2),
  ve_vco2 DECIMAL(3,2),
  rer DECIMAL(3,2),
  ve DECIMAL(3,2),
  vt DECIMAL(3,2),
  bf INT,
  cho_oxyd DECIMAL(3,2),
  fat_oxyd DECIMAL(3,2),
  tmb DECIMAL(6,2),
  vo2_v DECIMAL(3,2),
  CONSTRAINT fk_measurement_teste_data
    FOREIGN KEY (teste_data_id)
    REFERENCES ADA.teste_data (id_test_data)
);

-- Create table ADA.timestamps
CREATE TABLE IF NOT EXISTS ADA.timestamps (
  create_time TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  update_time TIMESTAMPTZ
);