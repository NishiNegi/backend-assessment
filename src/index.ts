import * as dotenv from 'dotenv';
import express from 'express';
import configExpress from './config/express';

dotenv.config();
const port = process.env.PORT || 8080;
const app = express();

// express config
configExpress(app);
// DB config

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  