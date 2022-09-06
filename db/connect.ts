import mongoose from 'mongoose';

const DB_NAME = 'INTERVIEW_PREP';

export default async function () {
  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid environment variable: "MONGODB_URI"');
  }

  await mongoose.connect(process.env.MONGODB_URI, { dbName: DB_NAME });
}
