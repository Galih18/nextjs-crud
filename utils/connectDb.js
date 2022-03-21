const mongoose = require('mongoose')

async function connectDb(){
    try{
        const MONGO_URI = 'mongodb://localhost:27017/next-crud-db'
        await mongoose.connect(MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log('Koneksi Berhasil ke MongoDB');
    } catch(error) {
        console.log(error);
    }

}

module.exports = connectDb;