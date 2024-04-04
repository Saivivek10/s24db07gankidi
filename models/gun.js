const mongoose = require("mongoose")
const gunSchema = mongoose.Schema({
gun_type: String,
Manufacturerr: String,
Caliber: Number
})
module.exports = mongoose.model("gun",
gunSchema)