const express = require('express');
const PORT = process.env.PORT || 5003 
const app = express()
require('./helpers/init_mongoDb')
const UserRouter = require('./Routers/user.route')

app.use(express.json())
app.use('/user', UserRouter)




app.listen(PORT, ()=>{ 
    console.log(`Server connected to http://localhost:${PORT}`);
    
})



