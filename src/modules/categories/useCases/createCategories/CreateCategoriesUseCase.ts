import { Category } from ".prisma/client";
import { client } from "../../../../prisma/client";
import { AppError } from "../../../../shared/infra/errors/AppError";


interface IRequest{
  name: string
  description: string
}

export class CreateCategoriesUseCase{

  async execute({ name, description }: IRequest): Promise<Category>{

    const verifyIfCategoryExist = await client.category.findUnique({
      where: {
        name
      }
    })

    if(verifyIfCategoryExist){
      throw new AppError("Categoria já existente")
    }

    const category = await client.category.create({
      data: {
        name,
        description
      },
    })

    return category
  }
}