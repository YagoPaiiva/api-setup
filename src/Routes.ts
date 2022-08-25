import { Router } from 'express'
import Teste from './App/Controllers/TesteControllers'

const routes = Router()

routes.get('/ping', Teste.index)
routes.get('/', Teste.updateUser)

export default routes
