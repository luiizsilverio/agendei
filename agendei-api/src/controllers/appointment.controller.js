import AppointmentService from "../services/appointment.service.js";

const service = new AppointmentService();

class AppointmentController {

  async listarPorUsuario(req, res) {
    const appointments = await service.listarPorUsuario(req.id_user);
    res.json(appointments);
  }

  async incluir(req, res) {
    const { id_doctor, id_service, booking_date, booking_hour } = req.body;

    const appointment = await service.incluir(
      req.id_user, 
      id_doctor, 
      id_service, 
      booking_date, 
      booking_hour
    );

    res.status(201).json(appointment);
  }

  async excluir(req, res) {
    const { id_appointment } = req.params;

    const doctor = await service.excluir(id_appointment, req.id_user);

    res.json(doctor);
  }
  
}

export default AppointmentController;
