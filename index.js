const express = require('express')
const cors = require('cors');
const transactionRouter  = require('./routes/transactionRoute');
const dbConnect =  require('./config');
dbConnect()


const app = express();
app.use(express.json())
app.use(cors())
app.use('/', transactionRouter)
app.listen(process.env.PORT||5000)