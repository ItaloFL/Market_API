import { Request, Response } from "express";
import { AddProductInOrderUseCase } from "./AddProductInOrderUseCase";



export class AddProductInOrderController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { custumer, items } = request.body

    const addProductInOrderUseCase = new AddProductInOrderUseCase()

    const carrinho = await addProductInOrderUseCase.execute({
      custumer,
      items
    })
    
    return response.json(carrinho)
  }
}