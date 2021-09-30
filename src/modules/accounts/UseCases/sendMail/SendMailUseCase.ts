import nodemailer, { Transporter } from 'nodemailer'
import 'dotenv'
import smtpTransport from 'nodemailer-smtp-transport'

interface IRequest{
  email: string
}

export class SendMailUseCase {

  private client: Transporter

  constructor(){
    const user : string = process.env.API_VALIDATION_EMAIL
    const pass : string = process.env.API_VALIDATION_PASSWORD

    console.log(user, pass)

    this.client = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      port: 465,
      host: 'smtp.gmail.com',
      secure: true,
      auth: {
        user, pass
      }
    }))
  }

  async execute({ email }: IRequest){

    await this.client.sendMail({
      from: 'market<noreplay>@gmail.com',
      to: email,
      subject: 'test',
      text: 'sucesso',

    })
  }
}