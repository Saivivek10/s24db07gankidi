const mongoose = require("mongoose")
const gunSchema = mongoose.Schema({
gun_type: String,
Manufacturer: String,
Caliber: Number
})
module.exports = mongoose.model("gun",
gunSchema)