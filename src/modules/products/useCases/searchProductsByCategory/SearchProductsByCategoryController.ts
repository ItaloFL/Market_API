import { Request, Response } from "express";
import { SearchProductsByCategoryUseCase } from "./SearchProductsByCategoryUseCase";



export class SearchProductsByCategoryController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { name } = request.params

    const searchProductsByCategoryUseCase = new SearchProductsByCategoryUseCase()

    const products = await searchProductsByCategoryUseCase.execute({
      name
    })

    return response.json(products)
  }
}