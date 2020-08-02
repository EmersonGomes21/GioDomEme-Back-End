import knex from '../database/connection';
import { Request, Response } from 'express'
class ProductsController {
  async create(request: Request, response: Response) {
    const {
      name,
      category,
      cust,
      sale_Price
    } = request.body;

    const product = {
      profile_img: 'image-fake',
      name,
      category,
      cust,
      sale_Price
    }

    const insertedIds = await knex('products').insert(product);

    const  product_id = insertedIds[0];

    return response.json({ 
      product_id,
      ...product,
     });

  };

  async index(request: Request, response: Response) {

    const products = await knex('products').select('*');
    const serializedProducts = products.map((product: {
      profile_img: string;
      id: number; name: string; category: string; cust: number; sale_Price: string;
    }) => {
      return {
        id: product.id,
        profile_img: product.profile_img,
        profile_img_url: `http://localhost:3333/uploads/img_products/${product.profile_img}`,
        name: product.name,
        category: product.category,
        cust: product.cust,
        sale_Price: product.sale_Price,

      }
    })

    return response.json(serializedProducts);
  };

};

export default ProductsController;
