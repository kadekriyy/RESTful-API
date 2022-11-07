const express = require("express")
const cors = require("cors")

const app = express()

const db = require("./app/models/")

db.mongoose
    .connect(db.url,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
        autoIndex: false, // Don't build indexes
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4
    }).then(()=>{
        console.log('Database succes connected')
    }).catch((e)=>{
        console.log('Cannot connect to the database', e)
        process.exit()
    })

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res)=>{
    res.json({
        message : "welcome"
    })
})

const PORT = 8000

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})