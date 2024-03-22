import mongoose from 'mongoose';

export const connect = async () => {
  const DB_URI = process.env.DB_URI;
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connected✨");
  } catch (error){
    console.error(error);
    console.log("Error connecting to the database❌");
  }
};

export default connect;