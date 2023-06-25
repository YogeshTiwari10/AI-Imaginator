import mongoose, { Query } from 'mongoose'

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url) 
    .then(() => console.log("connect to MongoDB"))
    .catch((err) => console.log(err))
}

export default connectDB