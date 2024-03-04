import pool from '../db.config'
import { type iUser } from '../interfaces/interface'

async function createDataDB (
  name: string,
  surname: string,
  email: string,
  pwd: string
): Promise<iUser[]> {
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    const sql: string =
      'INSERT INTO users (name, surname, email, pwd) Values ($1, $2, $3, $4) returning *'
    const { rows } = await client.query(sql, [name, surname, email, pwd])
    await client.query('COMMIT')
    return rows
  } catch (error: any) {
    await client.query('ROLLBACK')
    return []
  }
}

async function getAllUserDB (): Promise<iUser[]> {
  const client = await pool.connect()

  const sql: string = 'SELECT * FROM users order by id asc'
  const { rows } = await client.query(sql)
  return rows
}

async function getAllUserByIdDB (id: string): Promise<iUser[]> {
  const client = await pool.connect()

  const sql: string = 'SELECT * FROM users where id = $1'
  const { rows } = await client.query(sql, [id])
  return rows
}

async function updateUserDB (
  id: string,
  name: string,
  surname: string,
  email: string,
  pwd: string
): Promise<iUser[]> {
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    const sql: string =
      'update users set name = $1, surname = $2, email = $3, pwd = $4 where id = $5 returning *'
    const { rows } = await client.query(sql, [name, surname, email, pwd, id])
    await client.query('COMMIT')
    return rows
  } catch (error: any) {
    await client.query('ROLLBACK')
    return []
  }
}

async function deleteUserDB (id: string): Promise<iUser[]> {
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    const sql: string = 'delete from users where id = $1 returning *'
    const { rows } = await client.query(sql, [id])
    await client.query('COMMIT')
    return rows
  } catch (error: any) {
    await client.query('ROLLBACK')
    return []
  }
}

async function partUpdateUserDB (id: string, body: iUser): Promise<iUser[]> {
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    const sql1: string = 'select * from users where id = $1'
    const oldObj: iUser[] = (await client.query(sql1, [id])).rows
    const newObj: iUser = { ...oldObj[0], ...body }
    const sql2: string =
      'update users set name = $1, surname = $2, email = $3, pwd = $4 where id = $5 returning *'
    const { rows } = await client.query(sql2, [
      newObj.name,
      newObj.surname,
      newObj.email,
      newObj.pwd,
      id
    ])
    await client.query('COMMIT')
    return rows
  } catch (error: any) {
    await client.query('ROLLBACK')
    return []
  }
}

export {
  createDataDB,
  getAllUserDB,
  getAllUserByIdDB,
  updateUserDB,
  deleteUserDB,
  partUpdateUserDB
}
