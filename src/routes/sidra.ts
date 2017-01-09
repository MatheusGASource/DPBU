// Importando modulos externos
import {IRouteConfiguration, Request, IReply} from 'hapi'
import * as Wreck from 'wreck'

// COnfigurando rota '/sidra'
export const sidra: IRouteConfiguration = {
  method: 'GET',
  path: '/sidra',
  handler: (request: Request, reply: IReply) => {
    // Utilizando api sidra
    Wreck.get('http://api.sidra.ibge.gov.br/values/t/1612/n1/1/n2/all/c81/2702/p/all/v/214/f/n',
    {json: true}, (err: any, response: any, payload: any) => {
      // Respondendo saida da api sidra padronizada
      reply({
        Regiao: payload[1].D1N,
        Produto: payload[1].D2N,
        Ano: payload[1].D3N,
        Unidade: payload[1].MN,
        Valor: payload[1].V
      })
    })
  }
}
