import DoctorService from "../services/doctor.service.js";

const service = new DoctorService();

class DoctorController {

  async listar(req, res) {
    const { name, specialty } = req.query;

    const doctors = await service.listar(name, specialty);

    res.json(doctors);
  }

  async incluir(req, res) {
    const { name, specialty, icon } = req.body;

    const doctor = await service.incluir(name, specialty, icon);

    res.status(201).json(doctor);
  }

  async alterar(req, res) {
    const { id_doctor } = req.params;

    const { name, specialty, icon } = req.body;

    const doctor = await service.alterar(id_doctor, name, specialty, icon);

    res.status(201).json(doctor);
  }

  async excluir(req, res) {
    const { id_doctor } = req.params;

    const doctor = await service.excluir(id_doctor);

    res.json(doctor);
  }

  async listarServicos(req, res) {
    const { id_doctor } = req.params;

    const serv = await service.listarServicos(id_doctor);

    res.json(serv);
  }
  
}

export default DoctorController;
