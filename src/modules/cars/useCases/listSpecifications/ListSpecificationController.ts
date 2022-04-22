import { Request, Response } from 'express';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';
import { container } from 'tsyringe'

class ListSpecificationController {
  async handle(request: Request, response: Response) : Promise<Response> {
    const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase)
    const all = await listSpecificationsUseCase.execute()
    return response.status(200).json(all)
  }

}

export { ListSpecificationController }