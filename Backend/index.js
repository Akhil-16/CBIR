const connectToMongo=require('./db')
const express=require("express")
connectToMongo()
const app=express()
app.use(express.json())
const cors = require('cors');

app.use("*",cors({
    origin:true,
    credentials:true
}))
app.use("/shp/auth",require('./routes/auth'))
app.use("/shp/auth",require('./routes/shopping'))


app.listen(8081,()=>{
    console.log("listening to  port 8081")
})