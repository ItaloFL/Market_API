import { Router } from "express";
import { AddProductInOrderController } from "../../../../modules/carrinho/useCases/addProductIntoCarrinho/AddProductInOrderController";
import { ListOrdersController } from "../../../../modules/carrinho/useCases/listOrders/ListOrdersController";
import ensureAuthenticate from "../middlewares/ensureAuthenticate";

const carrinhoRoutes = Router()

const addProductInOrderController = new AddProductInOrderController()
const listOrdersController = new ListOrdersController()

carrinhoRoutes.post("/carrinho/:productId", ensureAuthenticate, addProductInOrderController.handle)
carrinhoRoutes.get("/carrinho/products/:id", ensureAuthenticate, listOrdersController.handle)


export { carrinhoRoutes }