import { Request, Response } from "express";



export class SearchProductsByCategoryController{

  async handle(request: Request, response: Response): Promise<Response>{

    return response.send()
  }
}