import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";



export class CreateProductController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { 
      name,
      description,
      marca_id,
      category_id,
      valor,
      photo, 
    } = request.body

    const createProductUseCase = new CreateProductUseCase()

    const product = await createProductUseCase.execute({
      name,
      description,
      marca_id,
      category_id,
      valor,
      photo, 
    })

    return response.status(201).json(product)
    
  }
}