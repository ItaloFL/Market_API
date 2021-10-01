import { client } from "../../../../prisma/client";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { AppError } from "../../../../shared/infra/errors/AppError";


export class AuthenticateUserUseCase{

  async execute(email: string, password: string){ 

    const verifyIfUserExist = await client.user.findUnique({
      where: {
        email
      }
    })

    if(!verifyIfUserExist){
      throw new AppError("Usuario ou senha incorretos")
    }

    const pass = await compare(password, verifyIfUserExist.password)

    if(!pass){
      throw new AppError("Usuario ou senha incorretos")
    }


    const token = sign({}, process.env.API_KEY_AUTHENTICATE, {
      subject: verifyIfUserExist.id,
      expiresIn: "1d"
    })

    return token
  }
}