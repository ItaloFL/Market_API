import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { classToClass } from 'class-transformer'



export class UserMap{
  static toDTO({
    name,
    email,
    data_nascimento,
    genero,
    CEP,
    CPF,
    number_phone,
    DDD,
    adress,
    number_house,
    photo
  }: ICreateUserDTO){
    const user = classToClass({
      name,
      email,
      data_nascimento,
      genero,
      CEP,
      CPF,
      number_phone,
      DDD,
      adress,
      number_house,
      photo
    })
    return user
  }
}