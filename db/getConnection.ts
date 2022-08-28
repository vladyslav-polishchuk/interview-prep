import { MongoClient } from 'mongodb';

const DB_NAME = 'INTERVIEW_PREP';

export default async function () {
  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid environment variable: "MONGODB_URI"');
  }

  const uri = process.env.MONGODB_URI;
  const options = {};
  const client = new MongoClient(uri, options);
  const connection = await client.connect();
  return connection.db(DB_NAME);
}
