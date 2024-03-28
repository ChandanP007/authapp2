import mongoose from 'mongoose';

//db config
const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'sociyo'
        })
        console.log("Connected to db successfully")
    }catch(err){
        console.log("Connection failed",err);
    }
}

export default connectDb;