import { client } from "../../../../prisma/client";
import { AppError } from "../../../../shared/infra/errors/AppError";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";




export class CreateProductUseCase{

  async execute({ id, name, description, marca_id, valor, photo }: ICreateProductDTO){


    const verifyIfProductExist = await client.product.findUnique({
      where: {
        name
      }
    })

    if(verifyIfProductExist){
      throw new AppError("Produto já existente")
    }

    const product = await client.product.create({
      data: {
        name,
        description,
        marca_id,
        valor,
        photo,
      }
    })

    return product
  }
}