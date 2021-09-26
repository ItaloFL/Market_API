import { client } from "../../../../prisma/client";


interface IRequest{

  id: string

}

export class ListOrdersUseCase{

  async execute({ id }: IRequest){

    const carrinho = await client.carrinho.findMany({
      where: {
        custumerField: {
          id
        }
      },
      include: {
        custumerField: true,
        itemsField: true
      }
    })

    return carrinho
  }
}