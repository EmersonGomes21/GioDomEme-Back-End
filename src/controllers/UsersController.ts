import knex from '../database/connection';
import { Request, Response } from 'express'
class UsersController {
  async show(request: Request, response: Response){
  const { id } = request.params;
  const user = await knex('users').where('id', id).first();
  if (!user){
    return response.status(400).json({ message: 'User not found.'});
  }
    return response.json(user);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      contact,
      telephone,
      address
    } = request.body;

    const user = {
      profile_img : 'users.png',
      name,
      contact,
      telephone,
      address
    }

    const insertedIds = await knex('users').insert(user);

    const  user_id = insertedIds[0];

    return response.json({ 
      user_id,
      ...user,
     });

  };  

  async index(request: Request, response: Response) {
    const users = await knex('users').select('*');

    const serializedUsers = users.map((user: {
      profile_img: string;
      id: number; name: string; contact: string; telephone: string; address: string;
    }) => {
      return {
        id: user.id,
        profile_img: user.profile_img,
        profile_img_url: `http://localhost:3333/uploads/img_users/${user.profile_img}`,
        name: user.name,
        contact: user.contact,
        telephone: user.telephone,
        address: user.address,

      }
    })

    return response.json(serializedUsers);
  };

};

export default UsersController;
