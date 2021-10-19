import express, { json, urlencoded } from 'express';
import router from './router';
import db from '../app/models'

const app = express()
const port = 3001
db.init()

app.use(json()); 
app.use(urlencoded({ extended: true })); 

app.use(express.static(__dirname + '/web/pages'));
app.use('/pages', (req, res) => {res.status(404).send('Not found')});
app.use(express.static(__dirname + '/web'));
app.use('/uploads', express.static('images'));
app.use('/api', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})