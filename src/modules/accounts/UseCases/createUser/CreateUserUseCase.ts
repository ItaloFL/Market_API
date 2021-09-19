import { hash } from "bcryptjs";
import { client } from "../../../../prisma/client";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";


export class CreateUserUseCase{

  async execute({id, name, email, password, CEP, CPF, DDD, adress, data_nascimento, genero, number_house, number_phone, photo}: ICreateUserDTO){


    const VerifyIfUserExist = await client.user.findUnique({
      where: {
        email
      }
    })

    if(VerifyIfUserExist){
      throw new Error("Usuario existente!")
    }

    const passwordHash = await hash(password, 8)

    const user = await client.user.create({
      data: {
        name,
        email,
        password: passwordHash,
        CEP,
        CPF,
        DDD,
        adress,
        data_nascimento,
        genero,
        number_house,
        number_phone,
        photo,
      }
    })

    return user
  }
}