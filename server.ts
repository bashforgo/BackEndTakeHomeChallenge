import cors from '@koa/cors'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import { default as gifsRoutes } from './src/routes/gifs'
import { default as userRoutes } from './src/routes/users'

// environment variables
process.env.PORT = '3000'

// App server
const app = new Koa()
const router = new Router()

app.use(cors())
app.use(bodyParser())

// bind REST routes
router.use(gifsRoutes)
router.use(userRoutes)

// alow methods
app.use(router.routes()).use(router.allowedMethods())

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`)
})
