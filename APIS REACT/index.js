import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './config/routes.js'

const app = express()
const corsOption={
    origin:'*'//'localhost:3000'


}
//configuracion del middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api',cors(corsOption),routes)

app.get('/',(req,res)=>res.send('welcome to the gay world'))
const server=app.listen(process.env.PORT || 8000,()=>{
    console.log(`servidor corriendose en puerto: ${server.address().port}`)
})

export default app