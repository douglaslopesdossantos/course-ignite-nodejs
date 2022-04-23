import { Request, Response } from 'express';
import { ListUsersUseCase } from './ListUsersUseCase';
import { container } from 'tsyringe'

class ListUsersController {
  async handle(request: Request, response: Response) : Promise<Response> {
    const listUsersUseCase = container.resolve(ListUsersUseCase)
    const all = await listUsersUseCase.execute()
    return response.status(200).json(all)
  }

}

export { ListUsersController }