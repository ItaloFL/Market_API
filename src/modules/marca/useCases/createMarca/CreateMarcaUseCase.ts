import { client } from "../../../../prisma/client";


interface IMarcaDTO{
  id?: string
  name: string
  description: string
}

export class CreateMarcaUseCase{

  async execute({ id, name, description }: IMarcaDTO){

    const verifyIfMarcaExist = await client.marca.findUnique({
      where: {
        id
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