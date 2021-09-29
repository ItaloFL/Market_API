import { client } from "../../../../prisma/client";
import { ICarrinhoDTO } from "../../dtos/ICarrinhoDTO";



export class AddProductInOrderUseCase{

  async execute({ custumer, items }: ICarrinhoDTO){

    const carrinho = await client.carrinho.create({
      data: {
        custumer,
        items
      },
      include: {
        custumerField: { select:  { name: true, email: true, adress: true, number_house: true ,DDD: true, number_phone: true}},
        
      },
    })

    return carrinho
  }
}