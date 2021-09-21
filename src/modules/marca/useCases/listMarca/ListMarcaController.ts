import { Request, Response } from "express";
import { ListMarcaUseCase } from "./ListMarcaUseCase";



export class ListMarcaController{

  async handle(request: Request, response: Response): Promise<Response>{

    const listMarcaUseCase = new ListMarcaUseCase()

    const marcas = await listMarcaUseCase.execute()

    return response.json(marcas)
  }
}