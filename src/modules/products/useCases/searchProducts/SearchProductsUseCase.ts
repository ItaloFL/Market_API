import { client } from "../../../../prisma/client";
import { AppError } from "../../../../shared/infra/errors/AppError";

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
      throw new AppError("Produto não encontrado")
    }

    const product = await client.product.findMany({
      where: {
        
      }
    }) 

    return product
  }
}