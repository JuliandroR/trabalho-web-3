import { Pool } from 'pg'

const connection = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'web3',
  password: 'postgres',
  port: 5432,
})

export default connection