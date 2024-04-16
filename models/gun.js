const mongoose = require("mongoose")
const gunSchema = mongoose.Schema({
    gun_type: {
        type: String,
        minlength: 2,
        maxlength: 10,
    },
    Manufacturer: String,
    Caliber: {
        type: Number,
        min: 2,
        max: 10
    },
})
module.exports = mongoose.model("gun",
    gunSchema)

