import DoctorService from "../services/doctor.service.js";

const service = new DoctorService();

class DoctorController {

  async index(req, res) {
    const { name, specialty } = req.query;
    const doctors = await service.listar(name, specialty);
    res.json(doctors);
  }

  async insert(req, res) {
    const { name, specialty, icon } = req.body;
    console.log(name)
    const doctors = await service.incluir(name, specialty, icon);
    res.status(201).json(doctors);
  }

}

export default DoctorController;
