import { User } from ".prisma/client";
import { hash } from "bcryptjs";
import { client } from "../../../../prisma/client";
import { AppError } from "../../../../shared/infra/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";


export class CreateUserUseCase{

  async execute({id, name, email, password, CEP, CPF, DDD, adress, data_nascimento, genero, number_house, number_phone, photo}: ICreateUserDTO): Promise<User>{


    const VerifyIfUserExist = await client.user.findUnique({
      where: {
        email
      }
    })

    if(VerifyIfUserExist){
      throw new AppError("Usuario existente!")
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
      },
    })

    return user
  }
}