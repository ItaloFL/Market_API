import { Request, Response } from "express";
import { CreateCategoriesUseCase } from "./CreateCategoriesUseCase";



export class CreateCategoriesController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { name, description } = request.body

    const createCategoriesUseCase = new CreateCategoriesUseCase()

    const category = await createCategoriesUseCase.execute({
      name,
      description
    })

    return response.status(201).json(category)
  }
}