const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017', { dbName: 'pg_userDataDemo'})
.then(()=>console.log('MongoDB connected successfully!'))
.catch((error)=> console.log('error occured due to ', error))



