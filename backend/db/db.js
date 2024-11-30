const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_CONNECT).then(() => {
      console.log("Connected to DB")
    }).catch((err) => {
      console.log(err)
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectToDb;
