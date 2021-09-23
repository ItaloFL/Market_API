import { Request, Response } from "express";
import { DeleteMarcaUseCase } from "./DeleteMarcaUseCase";



export class DeleteMarcaController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { id } = request.params

    const deleteMarcaUseCase = new DeleteMarcaUseCase()

    await deleteMarcaUseCase.execute(id)

    return response.status(204).json({
      message: "Marca deletada com sucesso"
    })
  }
}