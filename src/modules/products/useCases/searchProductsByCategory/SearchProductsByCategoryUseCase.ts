import { client } from "../../../../prisma/client";


interface IRequest{
  name: string
}

export class SearchProductsByCategoryUseCase{

  async execute({ name }: IRequest){

    const products = await client.product.findMany({
      where: {
       category: {
         name: {
           contains: name,
           mode: 'insensitive'
         }
       }
      },
      include: {
        category: {
          select: {
            name: true, description: true, creatadAt: true
          }
        }
      }
    }) 
    
    return products
  }
}