import { Request, Response } from "express";
import { ListOrdersUseCase } from "./ListOrdersUseCase";



export class ListOrdersController{


  async handle(request: Request, response: Response): Promise<Response>{

    const { id } = request.params

    const listOrdersUseCase = new ListOrdersUseCase()

    const carrinho = await listOrdersUseCase.execute({
      id, 
    })

    return response.json(carrinho)
  }
}