import express from 'express';
import { Request, Response, Application } from 'express';
const app: Application = express();
const bp = require('body-parser')


app.use(function(_, res: Response, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

export default app