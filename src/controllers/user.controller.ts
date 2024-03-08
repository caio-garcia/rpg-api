import express from 'express'
import {
  createUser,
  getAllUser,
  getAllUserById,
  updateUser,
  deleteUser,
  partUpdateUser,
} from '../services/user.service'
import type { iUser } from '../interfaces/interface'
import type { Request, RequestHandler, Response } from 'express'

const route = express.Router()

route.post('/sign-up', (async (req: Request, res: Response) => {
  try {
    const { name, surname, email, password } = req.body
    const response: Partial<iUser> = await createUser(
      name,
      surname,
      email,
      password
    )
    delete response.password

    return res.status(201).json(response)
  } catch (error: any) {
    console.log('ERROR ===>', error)
    return res.status(500).json({ message: 'Internal Server Error', error })
  }
}) as RequestHandler)

route.get('/', (async (_req: Request, res: Response) => {
  try {
    const data: iUser[] = await getAllUser()
    return res.status(200).json(data)
  } catch (error: any) {
    return res.status(500).json({ message: 'Internal Server Error', error })
  }
}) as RequestHandler)

route.get('/:id', (async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data: iUser[] = await getAllUserById(id)
    return res.status(200).json(data)
  } catch (error: any) {
    return res.status(500).json(error)
  }
}) as RequestHandler)

route.put('/:id', (async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, surname, email, pwd } = req.body
    const data: iUser[] = await updateUser(id, name, surname, email, pwd)
    return res.status(201).json(data)
  } catch (error: any) {
    return res.status(500).json(error)
  }
}) as RequestHandler)

route.delete('/:id', (async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data: iUser[] = await deleteUser(id)
    return res.status(201).json(data)
  } catch (error: any) {
    return res.status(500).json(error)
  }
}) as RequestHandler)

route.patch('/:id', (async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const body: iUser = req.body
    const data: iUser[] = await partUpdateUser(id, body)
    return res.status(200).json(data)
  } catch (error: any) {
    return res.status(500).json(error)
  }
}) as RequestHandler)

export default route
