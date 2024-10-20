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

  async alterar(id_doctor, name, specialty, icon) {
    const doctor = await repository.update(id_doctor, name, specialty, icon);
    return doctor;
  }

  async excluir(id_doctor) {
    const doctor = await repository.delete(id_doctor);
    return doctor;
  }
}

export default DoctorService;
