const mongoose = require("mongoose")
const organicfruitsSchema = mongoose.Schema({
name: String,
quantity: Number,
price: Number
})
module.exports = mongoose.model("organicfruits",
organicfruitsSchema)