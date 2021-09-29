import { client } from "../../../../prisma/client";


interface IRequest{

  id: string

}

export class ListOrdersUseCase{

  async execute({ id }: IRequest){

    const carrinho = await client.carrinho.findMany({
      where: {
        custumerField:{
          id,
        },
      },
      include: {
        custumerField: {
          select :{
            name: true, email: true, adress: true, number_house: true, DDD: true, number_phone: true
          }
        },
        itemsField: {
          include: {
            marcaID: {
              select: {
                name: true, description: true
              }
            }
          },
        },
      }
    })

    return carrinho
  }
}