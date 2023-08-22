import Product from "../models/productSchema.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ products: products });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getProdDetails = async (req, res) => {
    const id = req.params.id;
    const idz = id.substr(1);
    try {

        const details = await Product.findOne({ id: idz });
        console.log(details);
        res.status(200).json(details);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}