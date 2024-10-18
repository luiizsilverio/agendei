import DoctorRepository from "../repositories/doctor.repository.js";

const repository = new DoctorRepository();

class DoctorService {

  async all() {
    const doctors = repository.all();    
    return doctors;
  }

  async insert() {
    return repository.insert();
  }

}

export default DoctorService;
