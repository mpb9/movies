import cors from 'cors';
import express from 'express';
import boxd from './routes/boxd.routes.js';

const PORT = process.env.PORT || 2046;
const app = express();

// info: Middleware
app.use(cors());
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});
app.use(express.json());
app.use('/boxd', boxd);

// info: Routes

app.listen(PORT, () => console.log(`movies/server listening on port ${PORT}!`));
