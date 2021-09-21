import { Router } from "express";
import { CreateProductController } from "../../../../modules/products/useCases/createProduct/CreateProductController";
import { ListProductController } from "../../../../modules/products/useCases/listProduct/ListProductController";
import { UpdateProductController } from "../../../../modules/products/useCases/updateProduct/UpdateProductController";
import ensureAuthenticate from "../middlewares/ensureAuthenticate";


const productRoutes = Router() 


const createProductController = new CreateProductController()
const listProductController = new ListProductController()
const updateProductController = new UpdateProductController()


productRoutes.post("/product", createProductController.handle)
productRoutes.get("/product", listProductController.handle)
productRoutes.put("/product",ensureAuthenticate, updateProductController.handle)


export { productRoutes }