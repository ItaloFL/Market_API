import { Request, Response } from "express";
import { UpdateCategoriesUseCase } from "./UpdateCategoriesUseCase";



export class UpdateCategoriesController{

  async handle(request:Request, response: Response): Promise<Response>{

    const { id } = request.params
    const { name, description } = request.body

    const updateCategoriesUseCase = new UpdateCategoriesUseCase()

    const category = await updateCategoriesUseCase.execute({
      id,
      name,
      description
    }) 

    return response.json(category)
  }
}