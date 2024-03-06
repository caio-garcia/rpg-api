import { type iUser } from '../interfaces/interface'
import {
  createDataDB,
  getAllUserDB,
  getAllUserByIdDB,
  updateUserDB,
  deleteUserDB,
  partUpdateUserDB
} from '../queries/user.query'

async function createData (
  name: string,
  surname: string,
  email: string,
  pwd: string
): Promise<iUser[]> {
  const data: iUser[] = await createDataDB(name, surname, email, pwd)
  if (data.length === 0) throw new Error('data do not create')
  return data
}

async function getAllUser (): Promise<iUser[]> {
  const data: iUser[] = await getAllUserDB()
  if (data.length === 0) throw new Error('The database is empty')
  return data
}

async function getAllUserById (id: string): Promise<iUser[]> {
  const data: iUser[] = await getAllUserByIdDB(id)
  if (data.length === 0) throw new Error('Id is not found')
  return data
}

async function updateUser (
  id: string,
  name: string,
  surname: string,
  email: string,
  pwd: string
): Promise<iUser[]> {
  const data: iUser[] = await updateUserDB(id, name, surname, email, pwd)
  if (data.length === 0) throw new Error('Data is not saved')
  return data
}

async function deleteUser (id: string): Promise<iUser[]> {
  const data: iUser[] = await deleteUserDB(id)
  if (data.length === 0) throw new Error('Id is not found, data was not deleted')
  return data
}

async function partUpdateUser (id: string, body: iUser): Promise<iUser[]> {
  const data: iUser[] = await partUpdateUserDB(id, body)
  if (data.length === 0) throw new Error('Data is not changed')
  return data
}

export {
  createData,
  getAllUser,
  getAllUserById,
  updateUser,
  deleteUser,
  partUpdateUser
}
