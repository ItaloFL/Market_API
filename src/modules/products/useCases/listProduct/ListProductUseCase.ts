import { Product } from ".prisma/client";
import { client } from "../../../../prisma/client";



export class ListProductUseCase{


  async execute(): Promise<Product[]>{

    const products = await client.product.findMany()

    return products
  }
}