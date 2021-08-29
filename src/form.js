
import { Client } from 'pg'
const client = new Client()

export function processData(req, res) {
    await client.connect()
    
    let teste = req.body
    console.log(teste);
    res.send('Teste')
}