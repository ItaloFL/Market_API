import { Request, Response } from "express";
import { ProfileUserUseCase } from "./ProfileUserUseCase";



export class ProfileUserController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { id } = request.user

    const profileUserUseCase = new ProfileUserUseCase()

    const profile = await profileUserUseCase.execute(id)
    
    return response.json(profile)
  }
}