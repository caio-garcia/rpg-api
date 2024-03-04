import jwt from 'jsonwebtoken'
import { type iUser } from '../interfaces/interface'

function createToken (data: iUser[]): string {
  const secret: string = process.env.JWT_SECRET ?? ''
  return jwt.sign(data[0], secret)
}

export { createToken }
