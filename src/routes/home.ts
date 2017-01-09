// Importando modulos externos
import {IRouteConfiguration, Request, IReply} from 'hapi'

// COnfigurando rota '/'
export const home: IRouteConfiguration = {
  method: 'GET',
  path: '/',
  handler: (request: Request, reply: IReply) => {
    reply('Home')
  }
}
