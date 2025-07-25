import express, { Application } from 'express';
import cors from 'cors';

import bibliotecaRoutes from './routes/biblioteca-routes';

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use(bibliotecaRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

export default app;