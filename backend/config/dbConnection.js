import mongoose from "mongoose"

const connectDB = async () => 
{   
    try
    {  
        const DbCnnection = await mongoose.connect(process.env.MONGO_URL)
        console.log("Database Connection Successfull")
    } 
    catch(err){
        const errMessage = "Database Connection Error"
        console.log(errMessage)
    }
    finally
    {
        // console.log("Please Check Mongo DB Compass Open or not")
    }
    
}

export default connectDB