import { Request, Response } from "express";
import { SearchProductsByMarcaUseCase } from "./searchProductsByMarcauseCase";



export class SearchProductsByMarcaController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { name } = request.params

    const searchProductsByMarcaUseCase = new SearchProductsByMarcaUseCase()

    const products = await searchProductsByMarcaUseCase.execute({
      name
    })

    return response.status(200).json(products)
  }
}