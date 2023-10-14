import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    url: String,
    detailUrl: String,
    title: {
        shortTitle: String,
        longTitle: String
    },
    price: {
        cost: Number,
        discount: String,
        mrp: Number,
    },
    quantity: Number,
    description: String,
    discount: String,
    tagline: String,
})

const Product = new mongoose.model('Product', ProductSchema);

export default Product;