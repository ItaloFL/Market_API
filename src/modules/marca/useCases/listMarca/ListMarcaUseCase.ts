import { Marca } from ".prisma/client";
import { client } from "../../../../prisma/client";



export class ListMarcaUseCase{

  async execute(): Promise<Marca[]>{

    const marcas = await client.marca.findMany()

    return marcas
  }
}