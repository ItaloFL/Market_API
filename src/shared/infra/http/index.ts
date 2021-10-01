import { Router } from "express";
import { authenticateRoutes } from "./routes/authenticate.routes";
import { carrinhoRoutes } from "./routes/carrinho.routes.routes";
import { categoryRoutes } from "./routes/categories.routes";
import { marcaRoutes } from "./routes/marca.routes";
import { productRoutes } from "./routes/product.routes";
import { userRoutes } from "./routes/users.routes";


const routes = Router()

routes.use(userRoutes)
routes.use(authenticateRoutes)
routes.use(marcaRoutes)
routes.use(productRoutes)
routes.use(carrinhoRoutes)
routes.use(categoryRoutes)

export { routes }