import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";



export class UpdateUserController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { id } = request.user

    const { 
      CEP,
      adress,
      data_nascimento,
      number_phone,
      number_house,
      genero
    } = request.body

    const updateUserUseCase = new UpdateUserUseCase()

    const update = await updateUserUseCase.execute({
      id,
      CEP,
      adress,
      data_nascimento,
      number_phone,
      number_house,
      genero
    })

    return response.json(update)
  }
}