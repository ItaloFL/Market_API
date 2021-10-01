import { User } from ".prisma/client";
import { client } from "../../../../prisma/client";

interface IUpdateUser{

  id?: string
  email?: string
  data_nascimento?: string
  number_house?: string
  adress?: string
  number_phone?: string
  genero?: string
  CEP?: string
}

export class UpdateUserUseCase{

  async execute({ id, CEP, adress,data_nascimento, genero, number_house, number_phone }: IUpdateUser): Promise<User>{

    const updateUser = await client.user.update({
      where: {
        id,
      },
      data: {
        CEP,
        adress,
        data_nascimento,
        number_phone,
        number_house,
        genero,
      }
    })
    
    return updateUser
  }
}