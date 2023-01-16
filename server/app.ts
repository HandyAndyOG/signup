import express from 'express';
import { Request, Response, Application } from 'express';
import fetch from 'isomorphic-fetch';
import * as dotenv from 'dotenv'
dotenv.config();
const app: Application = express();
const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(function(_, res: Response, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

let dataSet: any;

app.get('/api/', async (_, res: Response) => {
  try {
    const apiData = await fetch(`${process.env.FETCH_URL}`)
    const response = await apiData.json()
    console.log(response)
    dataSet = response
    res.status(200).json(response)
  } catch (err) {
  res.status(404).send('Error fetching data from api')
  }
});

app.post('/api/', async(req: Request, res: Response) => {
  try {
    if (dataSet) {
      const apiData = await fetch(`${process.env.FETCH_URL}`)
      const response = await apiData.json()
      const newUser = {
        id: response.team.length + 1,
        name: req.body.username,
        email: req.body.useremail
      }
      dataSet.team.push(newUser.name)
      res.status(200).send(dataSet)
    } else {
      const apiData = await fetch(`${process.env.FETCH_URL}`)
      const response = await apiData.json()
      dataSet = response;
    }
  } catch (err) {
    res.status(404).send('Error reading data file')
  }
})

export default app