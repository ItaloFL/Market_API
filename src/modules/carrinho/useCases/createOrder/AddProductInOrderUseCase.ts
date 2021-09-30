import { client } from "../../../../prisma/client";
import { ICarrinhoDTO } from "../../dtos/ICarrinhoDTO";



export class AddProductInOrderUseCase{

  async execute({ custumer, productId }: ICarrinhoDTO){

    const carrinho = await client.carrinho.create({
      data: {
        custumer,
        productId
      },
      include: {
        custumerField: true,
        Product: true
      }
    })

    return carrinho
  }
}