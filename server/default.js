import { products } from "./constants/data.js";
import Product from "./models/productSchema.js";

const DefaultData = async () => {

    try {
        await Product.insertMany(products);
        // console.log('Data imported Successfully');
    }
    catch (err) {
        console.log('Error occured while importing data', err.message);


    }
}

export default DefaultData;