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
    return { message: "Inserir médico" };
  }
  

}

export default DoctorRepository;
