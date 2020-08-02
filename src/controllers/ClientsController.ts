import knex from '../database/connection';

import { Request, Response } from 'express'
class ClientsController {
  async show(request: Request, response: Response){
  const { id } = request.params;
  const user = await knex('clients').where('id', id).first();
  if (!user){
    return response.status(400).json({ message: 'Client not found.'});
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

    const client = {
      profile_img : 'clients.jpg',
      name,
      contact,
      telephone,
      address
    }

    const insertedIds = await knex('clients').insert(client);
    const  client_id = insertedIds[0];

    return response.json({ 
      client_id,
      ...client,
     });

  };  

  async index(request: Request, response: Response) {
    const clients = await knex('clients').select('*');

    const serializedClients = clients.map((client: {
      profile_img: string;
      id: number; name: string; contact: string; telephone: string; address: string;
    }) => {
      return {
        id: client.id,
        profile_img: client.profile_img,
        profile_img_url: `http://localhost:3333/uploads/img_clients/${client.profile_img}`,
        name: client.name,
        contact: client.contact,
        telephone: client.telephone,
        address: client.address,

      }
    })

    return response.json(serializedClients);
  };

};

export default ClientsController;
