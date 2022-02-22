import express from 'express';
import connect from './utils/connect';
import dotenv from 'dotenv';
import passportMiddleware from './middlewares/passport';

import authRoutes from './routes/auth.routes';
import specialRoutes from './routes/special.routes';

// Config
dotenv.config();
const port = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(express.json());

app.listen(port, async () => {
  console.log(`App is running at http://localhost:${port}`);

  await connect(process.env.MONGO_URI as string);
});

app.use(authRoutes);
app.use(specialRoutes);
