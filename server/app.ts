import express from 'express';
import { Response, Application } from 'express';
import fetch from 'isomorphic-fetch';
import * as dotenv from 'dotenv'
dotenv.config();
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

app.get('/', async (_, res: Response) => {
  try {
    const apiData = await fetch(`${process.env.FETCH_URL}`)
    const response = await apiData.json()
    res.status(200).json(response)
  } catch (err) {
    res.status(404).send('Error fetching data from api')
  }
});

export default app