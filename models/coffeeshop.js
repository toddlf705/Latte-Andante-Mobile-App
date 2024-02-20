const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const CoffeeShops = new Schema(
    {
        store_name: {type: String, required: true },
        category: {type: Array, required: true},
        address: {type: Array, required: true},
        phone: {type: Array, required: false},
        rating: {type: Number, required: true},
        img: {type: Array, required: true},
        map: {type: String, required: true}
    },


    { timestamps: true}
)
module.exports=mongoose.model("Coffee", CoffeeShops)
