import { Product } from ".prisma/client";
import { client } from "../../../../prisma/client";


interface IUpdateProduct{

  id?: string
  name?: string
  description?: string
  valor?: number
  photo?: string
}

export class UpdateProductUseCase{

  async execute({ id, name ,description, valor, photo }: IUpdateProduct): Promise<Product>{

    const updateProduct = await client.product.update({
      where: {
        id
      },
      data: {
        name,
        description,
        valor,
        photo
      }
    })

    return updateProduct
  }
}