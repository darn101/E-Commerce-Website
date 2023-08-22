import mongoose from 'mongoose';

export const connection = () => {

    const URL = 'mongodb+srv://Priyanshu:7hxHuS9Cr7MSEUDT@ebazaar.8extwjb.mongodb.net/?retryWrites=true&w=majority';
    try {
        mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected Successfully');

    }
    catch (err) {
        console.log('Error while connecting with the database', err.message)
    }


}