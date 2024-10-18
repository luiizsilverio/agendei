import Database from "../database/config.js";

class DoctorRepository {

  async all() {
    const db = await Database();

    const doctors2 = [
      {id: 1, name: "Heber", specialty: "Cardiologista", icon: "M"},
      {id: 1, name: "Palmira", specialty: "Cardiologista", icon: "F"},
      {id: 1, name: "Valdirene", specialty: "Cardiologista", icon: "F"},
    ]
    
   const doctors = await db.all(`
      SELECT * FROM doctors ORDER BY name
    `, []);
    
    return doctors;
  }

  async insert() {
    return { message: "Inserir médico" };
  }
  

}

export default DoctorRepository;
