import { Request, Response } from "express";
import { SearchProductUseCase } from "./SearchProductsUseCase";



export class SearchProductController{


  async handle(request: Request, response: Response): Promise<Response>{

    const { name } = request.params

    const searchProductUseCase = new SearchProductUseCase()

    const product = await searchProductUseCase.execute({
      name
    })

    return response.json(product)
  }
}