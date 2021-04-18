const mongoose = require('mongoose')

const dbOptions = {

}

mongoose
    .connect(process.env.MONGODB_URI, dbOptions)
    .then(_ => console.log("mongodb connected ..."))
    .catch(err => console.log(err))