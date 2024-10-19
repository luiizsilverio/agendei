import DoctorRepository from "../repositories/doctor.repository.js";

const repository = new DoctorRepository();

class DoctorService {

  async listar(name, specialty) {
    const doctors = await repository.all(name, specialty);    
    return doctors;
  }

  async incluir(name, specialty, icon) {
    const doctor = await repository.insert(name, specialty, icon);
    return doctor;
  }

}

export default DoctorService;
