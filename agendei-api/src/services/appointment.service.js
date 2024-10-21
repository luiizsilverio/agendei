import AppointmentRepository from "../repositories/appointment.repository.js";

const repository = new AppointmentRepository();

class AppointmentService {

  async listarPorUsuario(id_user) {
    const appointments = await repository.getById(id_user);    
    return appointments;
  }

  async incluir(id_user, id_doctor, id_service, booking_date, booking_hour) {
    const appointment = await repository.insert(
      id_user,
      id_doctor, 
      id_service, 
      booking_date, 
      booking_hour
    );
    
    return appointment;
  }

  async excluir(id_appointment, id_user) {
    const appointment = await repository.delete(id_appointment, id_user);
    return appointment;
  }

}

export default AppointmentService;
