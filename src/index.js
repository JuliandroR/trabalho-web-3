import express, { json, urlencoded } from 'express';
import router from './router';
const app = express()
const port = 3000

app.use(express.static(__dirname + '/web/pages'));
app.use(express.static(__dirname + '/web'));
app.use(json()); 
app.use(urlencoded({ extended: true })); 
app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})