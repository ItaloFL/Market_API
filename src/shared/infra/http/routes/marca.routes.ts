import { Router } from 'express'  
import { CreateMarcaController } from '../../../../modules/marca/useCases/createMarca/CreateMarcaController'
import { DeleteMarcaController } from '../../../../modules/marca/useCases/deleteMarca/DeleteMarcaController'
import { ListMarcaController } from '../../../../modules/marca/useCases/listMarca/ListMarcaController'
import ensureAuthenticate from '../middlewares/ensureAuthenticate'


const marcaRoutes = Router()

const createMarcaController = new CreateMarcaController()
const listMarcaController = new ListMarcaController()
const deleteMarcaController = new DeleteMarcaController()

marcaRoutes.post("/marca", ensureAuthenticate,createMarcaController.handle)
marcaRoutes.get("/marca", ensureAuthenticate ,listMarcaController.handle)
marcaRoutes.delete("/marca/:id", ensureAuthenticate, deleteMarcaController.handle)



export { marcaRoutes }