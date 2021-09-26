import { Marca } from ".prisma/client";
import { client } from "../../../../prisma/client";
import { AppError } from "../../../../shared/infra/errors/AppError";


interface IMarcaDTO{
  name: string
  description: string
}

export class CreateMarcaUseCase{

  async execute({ name, description }: IMarcaDTO): Promise<Marca>{

    const verifyIfMarcaExist = await client.marca.findUnique({
      where: {
        name
      }
    })

    if(verifyIfMarcaExist){
      throw new AppError("Marca Existente!")
    }

    const marca = await client.marca.create({
      data: {
        name,
        description
      }
    })

    return marca
  }
}