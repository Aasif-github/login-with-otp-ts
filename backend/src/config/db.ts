import mongoose, { connection } from "mongoose";

const DB_NAME:string = `OTP-LOGIN`;

const db_connection = async (): Promise<typeof mongoose | void> => {
    
    try{
        const connection =  await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);
        console.log('Database connected successfully');
        return connection;
        
    }catch(err){
        console.error(err);
    }
    
}
export default db_connection;