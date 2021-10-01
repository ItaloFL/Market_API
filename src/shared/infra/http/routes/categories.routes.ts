import { Router } from "express";
import { CreateCategoriesController } from "../../../../modules/categories/useCases/createCategories/CreateCategoriesController";
import { UpdateCategoriesController } from "../../../../modules/categories/useCases/updateCategories/UpdateCategoriesController";

import ensureAuthenticate from "../middlewares/ensureAuthenticate";

const categoryRoutes = Router()

const createCategoriesController = new CreateCategoriesController()
const updateCategoriesController = new UpdateCategoriesController()

categoryRoutes.post("/category", ensureAuthenticate, createCategoriesController.handle)
categoryRoutes.put("/category/:id", ensureAuthenticate, updateCategoriesController.handle)


export { categoryRoutes }