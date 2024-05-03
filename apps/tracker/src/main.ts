import express from 'express';
import { libResponse } from './base/base';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send(libResponse);
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
