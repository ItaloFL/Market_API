import { Request, Response } from "express";



export class RefreshTokenController{

  async handle(request: Request, response: Response): Promise<Response>{

    return response.send()
  }
}