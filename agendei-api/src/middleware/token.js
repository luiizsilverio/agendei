import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;
const expiresIn = '30m';

export default {

  createToken: (id_user) => {
    const token = jwt.sign({ id_user }, secret, {
      subject: String(id_user),
      expiresIn: expiresIn
    });

    return token;
  },

  validateToken: (req, res, next) => {
      const authHeader = req.headers.authorization; // "Bearer XXXXXX"

      if (!authHeader) {
        return res.status(401).json({ error: "Token não informado."});
      }

      const [_, token] = authHeader.split(' '); // ignora "Bearer" e pega só o token

      if (!token) {
        return res.status(401).json({ error: "Token não informado."});
      }

      jwt.verify(token, secret, (err, decoded) => {
        if (err) 
          return res.status(403).json({ error: "Token inválido" });
        else {
          req.id_user = decoded.id_user;
          // req.token = decoded;    
          next();
        }
      });
  }
}
