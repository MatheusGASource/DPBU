
// Importando modulos externos
import {ServerConnection} from 'hapi'
// Importando modulos internos
import {server} from './configs/hapi'

// Iniciando o servidor
server.start((err: any) => {
  if (err) throw err

  if(process.env.NODE_ENV !== 'production') {
    server.connections.forEach((connection: ServerConnection) => {
      console.log(`Server running at: ${connection.info.uri}`)
    })
  }
})
