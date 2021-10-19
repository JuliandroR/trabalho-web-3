import staticRouter from './static'
import apiRouter from './api'

export default app => {
    app.use(staticRouter);
    app.use('/api', apiRouter)
} 