import express, { json, urlencoded } from 'express';
import cors from "cors";
import router from './routers';
import db from './models'

db.init()
const app = express()
const port = 3001

app.use(cors())
app.use(json()); 
app.use(urlencoded({ extended: true })); 
router(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})