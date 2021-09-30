import { Request, Response } from "express";
import { SendMailUseCase } from "./SendMailUseCase";



export class SendMailController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { email }  = request.body

    const sendMailUseCase = new SendMailUseCase()

    await sendMailUseCase.execute({
      email
    })

    return response.json({
      message: "Email enviado com sucesso"
    })
  }
}