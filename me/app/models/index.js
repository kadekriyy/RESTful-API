const { default: mongoose } = require("mongoose")
const dbConfig = require("../../config/db-config")

// mongoose.Promise = global.Promise

const db = {
    mongoose : mongoose,
    url : dbConfig.url
}

// db.mongoose = mongoose
// db.url = dbConfig.url

module.exports = db