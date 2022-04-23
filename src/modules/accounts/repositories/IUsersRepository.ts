import User from "../entities/User"
import { ICreateUserDTO } from "../dtos/ICreateUserDTO"

interface IUsersRepository {
  create(data : ICreateUserDTO) : Promise<void>
  list() : Promise<User[]>
  findByEmail(email:string) : Promise<User>
}

export { IUsersRepository }