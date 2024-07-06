import dotenv from 'dotenv';
import express from 'express';
import listsRoutes from './routes/lists.js';

dotenv.config();

// start express app
const app = express();

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
});

// middleware
app.use(express.json()); // sees if requests have data, if it does passes it and attaches it to REQUEST object, "req.body" in routers

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/lists', listsRoutes);
