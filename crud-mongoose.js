const mongoose = require("mongoose")
const budgetsModel = require("./models/budgets_schema")
let url = 'mongodb://localhost:27017/chart'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
        console.log("Connected to the database")
    })
    .catch((connectionError) => {
        console.log("connectionError")
    })