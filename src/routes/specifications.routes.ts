import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'
import { ListSpecificationController } from '../modules/cars/useCases/listSpecifications/ListSpecificationController'

const createSpecificationController = new CreateSpecificationController()
const listSpecificationController = new ListSpecificationController()

const specificationsRoutes = Router()

specificationsRoutes.use(ensureAuthenticated)

specificationsRoutes.post('/', createSpecificationController.handle)
specificationsRoutes.get('/', listSpecificationController.handle)

export { specificationsRoutes }
