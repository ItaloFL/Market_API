

interface IRequest{
  CEP: string
  CPF: string
  sexo: string
  number_phone: string
  adress: string
  number_house: string
  data_nascimento: string
  email: string
}

export class ProfileUserUseCase{

  async execute({ CEP, CPF, adress, data_nascimento, email, number_house, number_phone, sexo }: IRequest){


    
  }
}