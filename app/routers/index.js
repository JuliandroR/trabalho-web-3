import staticRouter from './static'
import apiRouter from './api'
import { exceptionMiddlewere } from '../middleware/exceptionMiddleware'

export default app => {
    app.use(staticRouter);
    app.use('/api', apiRouter)
    app.use(exceptionMiddlewere)
}
