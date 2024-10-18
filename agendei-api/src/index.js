import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
// import { db } from "./database/config.js";

const app = express();

const dotenv = await import('dotenv');
dotenv.config();

app.use(express.json())
app.use(cors());
app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor Agendei rodando na porta ${PORT}`);
})
