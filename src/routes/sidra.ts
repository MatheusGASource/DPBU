// Importando modulos externos
import {IRouteConfiguration, Request, IReply} from 'hapi'
import * as Wreck from 'wreck'

// COnfigurando rota '/sidra'
export const sidra: IRouteConfiguration = {
  method: 'GET',
  path: '/sidra',
  handler: (request: Request, reply: IReply) => {
    // Utilizando api sidra
    Wreck.get('http://api.sidra.ibge.gov.br/values/t/1612/n1/1/n2/all/c81/2702/p/last/v/214/f/n',
    {json: true}, (err: any, response: any, payload: any) => {
      // Respondendo saida da api sidra padronizada
      const results: any = payload.map((data: any) => ({
        ano: data.D3N,
        produto: data.D2N,
        unidate: data.MN,
        valor: data.V
      }))
      reply(results)
    })
  }
}
