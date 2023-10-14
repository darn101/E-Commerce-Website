import Product from "../models/productSchema.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        // console.log(products);
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

export const getProdCategory = async (req, res) => {
    const id = req.params.id;
    const text = id.toLowerCase();
    const minprice = req.query.minprice;
    console.log(minprice);
    const maxprice = req.query.maxprice;
    console.log(maxprice);
    console.log(id);
    try {
        const details = await Product.find({
            $and: [
                {
                    $or: [
                        { tagline: { $regex: id, $options: 'i' } },
                        { "title.longTitle": { $regex: id, '$options': 'i' } }
                    ]
                },
                {
                    "price.cost": {
                        $gte: minprice,
                        $lte: maxprice
                    }
                }
            ]
        });
        console.log(details);
        res.status(200).json(details);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
//mongodb query for filtering based on greater and smaller values


//how to use objects inside mongodb query
//how do i use price.cost inside mongodb query

