import UserService from "../services/user.service.js";

const service = new UserService();

class UserController {

  async incluir(req, res) {
    const { name, email, password } = req.body;

    const user = await service.incluir(name, email, password);

    res.status(201).json(user);
  }

  async login(req, res) {
    const { email, password } = req.body;

    const user = await service.login(email, password);

    if (!user) 
      res.status(401).json({ error: "E-mail ou senha inválido(s)"});
    else {
      res.json(user);
    }
  }

  async profile(req, res) {
    const user = await service.profile(req.id_user);
    res.json(user);
  }

  
}

export default UserController;
