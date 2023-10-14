import { products } from "./constants/data.js";
import Product from "./models/productSchema.js";

const DefaultData = async () => {
    // console.log(products.length);

    try {
        await Product.insertMany(products);
        // await Product.deleteMany();
        console.log(products.length);
        // console.log('Data imported Successfully');
    }
    catch (err) {
        if (err.code == '11000') {
            console.log('All good');
        }
        else {
            console.log('Error occured while importing data', err.message);
        }
    }
}

export default DefaultData;