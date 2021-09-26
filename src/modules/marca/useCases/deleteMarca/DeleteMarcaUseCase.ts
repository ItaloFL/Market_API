import { Marca } from ".prisma/client";
import { client } from "../../../../prisma/client";
import { AppError } from "../../../../shared/infra/errors/AppError";



export class DeleteMarcaUseCase{

  async execute(id: string): Promise<Marca>{

    const verifyIfMarcaExist = await client.marca.findUnique({
      where: {
        id
      }
    })

    if(!verifyIfMarcaExist){
      throw new AppError("Marca não encontrada, tente novamente!")
    }

    const marca = client.marca.delete({
      where: {
        id
      }
    })

    return marca
  }
}