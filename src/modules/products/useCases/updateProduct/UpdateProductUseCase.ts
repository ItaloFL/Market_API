import { Product } from ".prisma/client";
import { client } from "../../../../prisma/client";
import { AppError } from "../../../../shared/infra/errors/AppError";


interface IUpdateProduct{

  id?: string
  name?: string
  description?: string
  valor?: number
  photo?: string
}

export class UpdateProductUseCase{

  async execute({ id, name ,description, valor, photo }: IUpdateProduct): Promise<Product>{

    const verifyIfProductExist = client.product.findUnique({
      where: {
        id
      }
    })

    if(!verifyIfProductExist){
      throw new AppError("Produto não encontrado, tente novamente!")
    }

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