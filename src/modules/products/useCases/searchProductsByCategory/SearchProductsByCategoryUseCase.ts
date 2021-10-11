import { client } from "../../../../prisma/client";


interface IRequest{
  name: string
}

export class SearchProductsByCategoryUseCase{

  async execute({ name }: IRequest){

    const products = await client.category.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive'
        }
      },
      include: {
        Product: true
      }
    })

    return products
  }
}