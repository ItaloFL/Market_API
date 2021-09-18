import { Router } from "express";
import { userRoutes } from "./routes/users.routes";


const routes = Router()

routes.use(userRoutes)

export { routes }