import { client } from "../../../../prisma/client";


interface IMarcaDTO{
  name: string
  description: string
}

export class CreateMarcaUseCase{

  async execute({ name, description }: IMarcaDTO){

    const verifyIfMarcaExist = await client.marca.findUnique({
      where: {
        name
      }
    })

    if(verifyIfMarcaExist){
      throw new Error("Marca Existente!")
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