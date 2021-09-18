import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";



export class CreateUserController{

  async handle(request: Request, response: Response): Promise<Response>{

    const {
      name,
      email,
      password,
      CEP,
      CPF,
      DDD,
      adress,
      data_nascimento,
      genero,
      number_house,
      number_phone,
      photo
    }
    = request.body 

    const createUserUseCase = new CreateUserUseCase()

    const user = await createUserUseCase.execute({
      name,
      email,
      password,
      CEP,
      CPF,
      DDD,
      adress,
      data_nascimento,
      genero,
      number_house,
      number_phone,
      photo,
    })

    return response.status(201).json(user)
  }
}