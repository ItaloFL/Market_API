import { Request, Response } from "express";
import { ListProductUseCase } from "./ListProductUseCase";



export class ListProductController{

  async handle(request: Request, response: Response): Promise<Response>{

    const listProductUseCase = new ListProductUseCase()

    const product = await listProductUseCase.execute()

    return response.json(product)
  }
}