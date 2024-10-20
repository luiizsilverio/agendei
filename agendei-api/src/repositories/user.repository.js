import Database from "../database/config.js";

class UserRepository {

  async insert(name, email, password) {
    const db = await Database();    
    
    const user = await db.run(`
        INSERT INTO users (name, email, password) VALUES (?, ?, ?)
      `, [name, email, password], 
      // (err) => {
      //   if (!err) console.log(this.lastID);
      // }
    );
    
    return { id_user: user.lastID };
  }

  async getByEmail(email) {
    const db = await Database();    

    const user = await db.get(`
      SELECT * FROM users WHERE email = ?
    `, [email]);

    return user;
  }
}

export default UserRepository;
