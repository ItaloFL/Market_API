import { client } from "../../../../prisma/client";


interface IRequest{

  id: string

}

export class ListOrdersUseCase{

  async execute({ id }: IRequest){

    const carrinho = await client.carrinho.findMany({
      where: {
        id
      },
      include: {
        custumerField: true,
        Product: true,
      }
    })

    

    return { carrinho }
  }
}