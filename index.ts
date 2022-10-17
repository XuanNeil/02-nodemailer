import 'express-async-errors';
import dotenv from 'dotenv';

import express from 'express';
const app = express();

dotenv.config();

import {sendEmail} from './controllers/sendEmail';
// error handler
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Email Project</h1> <a href="/send">send email</a>');
});

app.get('/send', sendEmail);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
