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

  // async listar(req, res) {
  //   const { name, specialty } = req.query;

  //   const doctors = await service.listar(name, specialty);

  //   res.json(doctors);
  // }


  // async alterar(req, res) {
  //   const { id_doctor } = req.params;

  //   const { name, specialty, icon } = req.body;

  //   const doctor = await service.alterar(id_doctor, name, specialty, icon);

  //   res.status(201).json(doctor);
  // }

  // async excluir(req, res) {
  //   const { id_doctor } = req.params;

  //   const doctor = await service.excluir(id_doctor);

  //   res.status(200).json(doctor);
  // }

  
}

export default UserController;
