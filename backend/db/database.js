const mongoose = require('mongoose');

const db = async () => {
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database connection successful')
    }catch(error){
        console.log('Database connection failed!')
    }
}

module.exports = {db}