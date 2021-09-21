import { client } from "../../../../prisma/client";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'


export class AuthenticateUserUseCase{

  async execute(email: string, password: string){ 

    const verifyIfUserExist = await client.user.findUnique({
      where: {
        email
      }
    })

    if(!verifyIfUserExist){
      throw new Error("Usuario ou senha incorretos")
    }

    const pass = await compare(password, verifyIfUserExist.password)

    if(!pass){
      throw new Error("Usuario ou senha incorretos")
    }


    const token = sign({}, "c1c16452b04650ea34d1463da2739f3b", {
      subject: verifyIfUserExist.id,
      expiresIn: "1d"
    })

    return token
  }
}