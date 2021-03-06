import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../../errors/AppError";

interface IPayLoad{
  sub: string
}

export default function ensureAuthenticate(request: Request, response: Response, next: NextFunction){


  const authHeader = request.headers.authorization

  if(!authHeader){
    throw new AppError("Token faltando ou invalido!")
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub: user_id } = verify(
      token,
      process.env.API_KEY_AUTHENTICATE
    ) as IPayLoad

    request.user = {
      id: user_id,  
    }

    next()
  } catch{
    throw new AppError("Token invalido")
  }
}