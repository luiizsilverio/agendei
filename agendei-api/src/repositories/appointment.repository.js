import Database from "../database/config.js";

class AppointmentRepository {

  async getById(id_user) {
    const db = await Database();    

    const appointments = await db.all(`
        SELECT a.id_appointment, s.description as service, d.name as doctor, 
        d.specialty, a.booking_date, a.booking_hour, u.name as user, ds.price
        FROM appointments a
        JOIN services s on s.id_service = a.id_service
        JOIN doctors d on d.id_doctor = a.id_doctor
        JOIN doctors_services ds ON ds.id_doctor = a.id_doctor 
        AND ds.id_service = a.id_service
        JOIN users u on u.id_user = a.id_user
        WHERE a.id_user = ?
        ORDER BY a.booking_date, a.booking_hour
      `, [id_user]
    );
    
    return appointments;
  }

  async insert(id_user, id_doctor, id_service, booking_date, booking_hour) {
    const db = await Database();    
    
    const appointment = await db.run(`
        INSERT INTO appointments (id_user, id_doctor, id_service, booking_date, booking_hour) 
        VALUES (?, ?, ?, ?, ?)
      `, [id_user, id_doctor, id_service, booking_date, booking_hour], 
    );
    
    return { id_appointment: appointment.lastID };
  }

}

export default AppointmentRepository;
