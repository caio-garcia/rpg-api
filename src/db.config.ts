import { Pool } from 'pg'

const pool = new Pool({
  host: process.env.HOST,
  port: Number(process.env.PORT_DB),
  password: process.env.PASSWORD,
  user: process.env.USER,
  database: process.env.DATABASE
})

export default pool
