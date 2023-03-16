const express = require('express')
const cors = require('cors')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const morgan = require('morgan')
const userRoutes = require('./routes/users.route')
const authRoutes = require('./routes/auth.route')
const conversationRoutes = require('./routes/conversations.route')
const messageRoutes = require('./routes/messages.route')
const errorHandlerRouter = require('./routes/errorHandler.route')
const app = express()
const PORT = 8000

initModels()

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(userRoutes, authRoutes, conversationRoutes, messageRoutes)

errorHandlerRouter(app)

db.authenticate()
.then(() => console.log('Base de datos conectada'))
.catch(error => console.log(error))

db.sync({force: true})
.then(() => console.log('Base de datos sincronizada'))
.catch(error => console.log(error))


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})