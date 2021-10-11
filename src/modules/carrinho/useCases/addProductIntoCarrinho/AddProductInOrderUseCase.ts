import { Carrinho } from ".prisma/client";
import { client } from "../../../../prisma/client";
import { ICarrinhoDTO } from "../../dtos/ICarrinhoDTO";



export class AddProductInOrderUseCase{

  async execute({ custumer, productId }: ICarrinhoDTO): Promise<Carrinho>{

    const carrinho = await client.carrinho.create({
      data: {
        custumer,
        productId
      },
    })
    
    return carrinho
  }
}