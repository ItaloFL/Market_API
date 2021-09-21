import { client } from "../../../../prisma/client";

interface IRequest{
  name: string
}

export class SearchProductUseCase{


  async execute({ name }: IRequest){

    const verifyIfProductExist = await client.product.findUnique({
      where: {
        name
      }
    })

    if(!verifyIfProductExist){
      throw new Error("Produto não encontrado")
    }

    const product = await client.product.findMany({
      where: {
        
      }
    })

  }
}