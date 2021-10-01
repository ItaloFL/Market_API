import { client } from "../../../../prisma/client";
import { AppError } from "../../../../shared/infra/errors/AppError";
import { ICategoriesDTO } from "../../dtos/ICategoriesDTO";



export class UpdateCategoriesUseCase{

  async execute({ id, name, description }: ICategoriesDTO){
  
    const verifyIfCategoryExist = await client.category.findUnique({
      where: {
        id
      }
    })

    if(!verifyIfCategoryExist){
      throw new AppError("Categoria não encontrada")
    }

    const updateCategory = await client.category.update({
      where: {
        id
      },
      data: {
        name,
        description
      }
    })

    return updateCategory
  }
}