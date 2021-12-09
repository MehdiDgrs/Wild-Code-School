const express = require('express');
const app = express();
const port = 3000;
const route = require('./routes/Argonaute')
require('dotenv').config();
const connectDB = require('./db/connect')



//middleware
app.use(express.static('./public'));
app.use(express.json());

//route
app.use('/api/argonaute',route)

//async db and connect to localhost

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(` app listening at http://localhost:${port}`)
    })
  
} catch (error) {
  console.log(error)
  
}}

start();

