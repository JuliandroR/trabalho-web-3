import { Pool } from 'pg'

const connection = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'lp3',
  password: 'postgres',
  port: 5432,
})

export default connection