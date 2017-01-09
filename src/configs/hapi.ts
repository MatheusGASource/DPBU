// Importando modulos externos
import {Server} from 'hapi'
// Importando modulos internos
import * as route from '../routes/index'

// Criando nova instância do servidor hapi
export const server: Server = new Server()

// Criando nova connexão http
const api: Server = server.connection({
  address: '0.0.0.0',
  port: process.env.PORT || 80
})

// Implementado as rotas da api
api.route([route.sidra, route.home])
