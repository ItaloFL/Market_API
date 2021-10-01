import { client } from "../../../../prisma/client";


interface IRequest{

  name: string
}

export class SearchProductsByMarcaUseCase {

  async execute({ name }: IRequest){

    const products = await client.marca.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive'
        }
      },
      include: {
        Product: true,
      },

  
    })

    return products
  }
}