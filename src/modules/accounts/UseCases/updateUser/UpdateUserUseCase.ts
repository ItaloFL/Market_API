import { client } from "../../../../prisma/client";

interface IUpdateUser{

  email?: string
  data_nascimento?: string
  number_house?: string
  adress?: string
  number_phone?: string
  genero?: string
  CEP?: string
  

}

export class UpdateUserUseCase{

  async execute({ CEP, adress,data_nascimento, email, genero, number_house, number_phone }: IUpdateUser){

    const updateUser = await client.user.update({
      where: {
        email,
      },
      data: {
        CEP,
        adress,
        data_nascimento,
        number_phone,
        number_house,
        genero,
        email
      }
    })
    
    return updateUser
  }
}