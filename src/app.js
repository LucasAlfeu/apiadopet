import express from 'express';
import db from './Config/dbConnet.js';
import routes from './Routes/index.js'

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
    console.log('Conexão com o banco de dados feito com sucesso')
})

const app = express()
app.use(express.json())

routes(app)

export default app