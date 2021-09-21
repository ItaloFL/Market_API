import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";



export class UpdateProductController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { id } = request.user

    const { 
      name,
      description,
      valor,
      photo
    } = request.body

    const updateProductUseCase = new UpdateProductUseCase()

    const updateProduct = await updateProductUseCase.execute({
      id,
      name,
      description,
      valor,
      photo
    })

    return response.json(updateProduct)
  }
}