import Koa from 'koa'
import Router from 'koa-router'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'

// environment variables
process.env.PORT = '3000'

// App server
const app = new Koa()
const router = new Router()

app.use(cors())
app.use(bodyParser())

// bind REST routes
require('./src/routes/users')(router)

// alow methods
app.use(router.routes()).use(router.allowedMethods())

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 80}`)
})
