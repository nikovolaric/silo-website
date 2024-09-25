import { connect, connections } from "mongoose";

async function connectDB() {
  if (connections[0].readyState) {
    return true;
  }

  try {
    await connect(process.env.MONGODB_URI as string);
    console.log("DB connected");
    return true;
  } catch (err) {
    console.log(err);
  }
}

export default connectDB;
