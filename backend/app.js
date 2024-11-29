const dotenv = require("dotenv")
dotenv.config();

const express = require("express")
const cors = require("cors")
const app = express()

//for devlopment
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hemlo Domston")
})

module.exports = app
