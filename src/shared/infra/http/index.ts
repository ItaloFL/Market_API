import { Router } from "express";
import { authenticateRoutes } from "./routes/authenticate.routes";
import { userRoutes } from "./routes/users.routes";


const routes = Router()

routes.use(userRoutes)
routes.use(authenticateRoutes)

export { routes }