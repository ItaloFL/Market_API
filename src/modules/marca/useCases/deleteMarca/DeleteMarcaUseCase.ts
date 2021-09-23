import { client } from "../../../../prisma/client";



export class DeleteMarcaUseCase{

  async execute(id: string){

    const marca = client.marca.delete({
      where: {
        id
      }
    })

    return marca
  }
}