const express = require('express')
const cors = require('cors');
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//specifying middlewares
app.use(express.json())
app.use(cors(
    //here put the domain of the server
))

app.get('/', (req, res) => {
    res.send('Hello!')
})


const server = () => {
    // db()
    app.listen(PORT, () => {
        console.log('You are listening to port:', PORT);
    })
}

server()