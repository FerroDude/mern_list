require('dotenv').config();
const express = require('express');
const listsRoutes = require('./routes/lists');

//start express APP
const app = express();

//listen for rquests
app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
});

//middleWare
app.use(express.json()); //sees if requests have data, if it does passes it and attaches it to REQUEST object, "req.body" in routers

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use('/api/lists', listsRoutes);
