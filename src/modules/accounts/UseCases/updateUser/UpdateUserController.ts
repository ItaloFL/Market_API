import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";



export class UpdateUserController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { 
      CEP,
      adress,
      data_nascimento,
      number_phone,
      number_house,
      email,
      genero
    } = request.body

    const updateUserUseCase = new UpdateUserUseCase()

    const update = await updateUserUseCase.execute({
      CEP,
      adress,
      data_nascimento,
      number_phone,
      number_house,
      email,
      genero
    })

    return response.json(update)
  }
}