import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ayushtiwari2410:ayushtiwari2410@cluster0.0hb2qey.mongodb.net/test?retryWrites=true&w=majority"
    );
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
