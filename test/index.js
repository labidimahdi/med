const express = require('express');//
const mongoose = require('mongoose');//
const dotenv=require('dotenv').config();
const app = express();
const routesUrls = require('./routes/routes')
const cors = require('cors') 
mongoose.connect(process.env.DATABASE_ACCESS)
{
    console.log("Database Connected")
}
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(express.json())
app.use(cors(corsOptions))
app.use('/app',routesUrls)
app.get('/',(req,res)=>{console.log('verify connection')
res.send("hello from server")
}

)
app.listen(5001,() => 
{
    console.log("server is running on port 5001");
});