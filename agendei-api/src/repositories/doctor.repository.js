import Database from "../database/config.js";

class DoctorRepository {

  async all(name) {
    const db = await Database();    
    let doctors;
    
    if (!name) {
      doctors = await db.all(`
          SELECT * FROM doctors ORDER BY name
        `, []);
    } else {
      doctors = await db.all(`
          SELECT * FROM doctors 
          WHERE name LIKE ?
          ORDER BY name
      `, ["%" + name + "%"])
    }
    
    return doctors;
  }

  async insert(name, specialty, icon) {
    const db = await Database();    
    
    const doctor = await db.run(`
        INSERT INTO doctors (name, specialty, icon) VALUES (?, ?, ?)
      `, [name, specialty, icon], 
      // (err) => {
      //   if (!err) console.log(this.lastID);
      // }
    );
    
    return { id_doctor: doctor.lastID };
  }
  
  async update(id_doctor, name, specialty, icon) {
    const db = await Database();    
    
    const doctor = await db.run(`
        UPDATE doctors SET name = ?, specialty = ?, icon = ?
        WHERE id_doctor = ?
      `, [name, specialty, icon, id_doctor], 
    );
    
    return { id_doctor };
  }

  async delete(id_doctor) {
    const db = await Database();    
    
    const doctor = await db.run(`
        DELETE FROM doctors WHERE id_doctor = ?
      `, [id_doctor], 
    );
    
    return { id_doctor };
  }

  async getServices(id_doctor) {
    const db = await Database();

    const serv = await db.all(`
        SELECT s.id_service, s.description, ds.price FROM SERVICES s
        JOIN doctors_services ds ON ds.id_service = s.id_service
        WHERE ds.id_doctor = ?
      `, [id_doctor]
    );

    return serv;
  }

}

export default DoctorRepository;
