import express from 'express';
import { Request, Response, Application } from 'express';
import fetch from 'isomorphic-fetch';
import * as dotenv from 'dotenv'
dotenv.config();
const app: Application = express();
const bp = require('body-parser')
const uri = process.env.FETCH_URL || 'https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6'

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(function(_, res: Response, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
interface Data {
  team: string[]
}
let dataSet: Data;

app.get('/api/', async (_, res: Response) => {
  try {
    const apiData = await fetch(uri)
    const response = await apiData.json()
    dataSet = response
    res.status(200).json(response)
  } catch (err) {
  res.status(404).send('Error fetching data from api')
  }
});

app.post('/api/', async(req: Request, res: Response) => {
  console.log(req.body)
  try {
    if (dataSet) {
      const apiData = await fetch(uri)
      const response = await apiData.json()
      const newUser = {
        id: response.team.length + 1,
        name: req.body.username.charAt(0).toUpperCase() + req.body.username.slice(1),
        email: req.body.useremail
      }
      dataSet.team.push(newUser.name)
      return res.status(200).send(dataSet)
    } else {
      const apiData = await fetch(uri)
      const response = await apiData.json()
      const newUser = {
        id: response.team.length + 1,
        name: req.body.username.charAt(0).toUpperCase() + req.body.username.slice(1),
        email: req.body.useremail
      }
      response.team.push(newUser)
      dataSet = response;
      return res.status(200).send(dataSet)
    }
  } catch (err) {
    return res.status(404).send('Error reading data file')
  }
  return
})

export default app