import DoctorService from "../services/doctor.service.js";

const service = new DoctorService();

class DoctorController {

  async index(req, res) {
    const doctors = await service.all();
    res.json(doctors);
  }


}

export default DoctorController;
