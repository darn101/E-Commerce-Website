import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connection = () => {

    const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ebazaar.8extwjb.mongodb.net/?retryWrites=true&w=majority`;
    try {
        mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected Successfully');

    }
    catch (err) {
        console.log('Error while connecting with the database', err.message)
    }


}