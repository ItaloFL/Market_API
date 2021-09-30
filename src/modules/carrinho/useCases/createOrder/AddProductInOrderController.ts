import { Request, Response } from "express";
import { AddProductInOrderUseCase } from "./AddProductInOrderUseCase";



export class AddProductInOrderController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { id: custumer } = request.user
    const { productId } = request.params

    const addProductInOrderUseCase = new AddProductInOrderUseCase()

    const carrinho = await addProductInOrderUseCase.execute({
      productId,
      custumer
    })
    
    return response.json(carrinho)
  }
}