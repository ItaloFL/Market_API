import { Router } from "express";
import { CreateProductController } from "../../../../modules/products/useCases/createProduct/CreateProductController";
import { ListProductController } from "../../../../modules/products/useCases/listProduct/ListProductController";
import { SearchProductController } from "../../../../modules/products/useCases/searchProducts/SearchProductsController";
import { SearchProductsByMarcaController } from "../../../../modules/products/useCases/searchProductsByMarca/searchProductsByMarcaController";
import { UpdateProductController } from "../../../../modules/products/useCases/updateProduct/UpdateProductController";
import { SearchProductsByCategoryController } from '../../../../modules/products/useCases/searchProductsByCategory/SearchProductsByCategoryController'
import ensureAuthenticate from "../middlewares/ensureAuthenticate";


const productRoutes = Router() 


const createProductController = new CreateProductController()
const listProductController = new ListProductController()
const updateProductController = new UpdateProductController()
const searchProductController = new SearchProductController()
const searchProductsByMarcaController = new SearchProductsByMarcaController()
const searchProductsByCategoryController = new SearchProductsByCategoryController()


productRoutes.post("/product", ensureAuthenticate, createProductController.handle)
productRoutes.get("/product", ensureAuthenticate , listProductController.handle)
productRoutes.put("/product/:id",ensureAuthenticate, updateProductController.handle)
productRoutes.get("/product/search/:name", ensureAuthenticate, searchProductController.handle)
productRoutes.get("/products/search/:name", ensureAuthenticate, searchProductsByMarcaController.handle)
productRoutes.get("/products/searchh/:name", ensureAuthenticate, searchProductsByCategoryController.handle)


export { productRoutes }