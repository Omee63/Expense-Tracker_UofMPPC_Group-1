const express = require('express')
const cors = require('cors');
const app = express()
const {readdirSync } = require('fs');
const { db } = require('./db/database');
const { route } = require('./routes/transactions');

require('dotenv').config()

const PORT = process.env.PORT

//specifying middlewares
app.use(express.json())
app.use(cors(
    //here put the domain of the server
))

//routes
readdirSync('./routes').map((route) => app.use('/test', require('./routes/' + route)))

app.get('/', (req, res) => {
    res.send('Hello!')
})


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('You are listening to port:', PORT);
    })
}

server()