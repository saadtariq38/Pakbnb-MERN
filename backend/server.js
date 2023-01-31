const express = require('express') ;
const colours = require('colors')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000
const cors = require('cors')


const { errorHandler } = require('./middleware/errorMiddleware')
const  connectDB  = require("./config/db")



connectDB();

const app = express();

app.use(cors())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization "
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

    next();
});


//body parser for raw json and urlencoded to use req.body
app.use(express.json())
app.use(express.urlencoded({ extended : false }))


app.use('/api/rooms', require('./routes/roomRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/services', require('./routes/serviceRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

