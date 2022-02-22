import mongoose from 'mongoose';
import 'dotenv/config';

async function connect(url: string) {
  try {
    await mongoose.connect(url);
    console.log('DB connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connect;
