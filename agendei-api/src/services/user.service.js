import bcrypt from "bcrypt";
import UserRepository from "../repositories/user.repository.js";
import jwt from "../middleware/token.js";

const repository = new UserRepository();

class UserService {

  async incluir(name, email, password) {

    const hashedPassword = await bcrypt.hash(password, 10); 

    const user = await repository.insert(name, email, hashedPassword);

    user.token = jwt.createToken(user.id_user);

    return user;
  }

  async login(email, password) {

    const user = await repository.getByEmail(email);

    if (user) {
      const passwordOk = await bcrypt.compare(password, user.password);

      if (!passwordOk) return null;

      delete user.password;

      user.token = jwt.createToken(user.id_user);
    }

    return user
  }

}

export default UserService;
