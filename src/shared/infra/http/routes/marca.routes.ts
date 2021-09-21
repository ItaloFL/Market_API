import { Router } from 'express'  
import { CreateMarcaController } from '../../../../modules/marca/useCases/createMarca/CreateMarcaController'
import { ListMarcaController } from '../../../../modules/marca/useCases/listMarca/ListMarcaController'


const marcaRoutes = Router()

const createMarcaController = new CreateMarcaController()
const listMarcaController = new ListMarcaController()

marcaRoutes.post("/marca", createMarcaController.handle)
marcaRoutes.get("/marca", listMarcaController.handle)



export { marcaRoutes }