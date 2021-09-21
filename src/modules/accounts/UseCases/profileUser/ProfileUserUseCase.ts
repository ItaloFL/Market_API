import { client } from "../../../../prisma/client";
import { UserMap } from "../../mapper/UserMap";


export class ProfileUserUseCase{

  async execute(id: string){

    const user = await client.user.findUnique({
      where:{
        id
      },
    })
    
    return UserMap.toDTO(user)
  }
}