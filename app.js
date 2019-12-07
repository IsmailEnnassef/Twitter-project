const express=require('express')
const path=require('path')
const socketio=require('socket.io')
const http = require('http')
const cors=require('cors')

const publicDirectoryPath = path.join(__dirname,'./public/') 
const port = process.env.PORT || 3000
const app = express().use('*',cors())
app.use('/',express.static(publicDirectoryPath))


const server = http.createServer(app)
const io=socketio(server)


server.listen(port,()=>{
    console.log("server successfuly listening on port "+port)
})