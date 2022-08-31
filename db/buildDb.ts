import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

import connect from './connect';
import { QUESTIONS_TABLE_NAME } from './schema';
import questions from './initialData/questions';

dotenv.config({
  path: './.env.local',
});

async function buildDb() {
  await connect();

  const Questions = mongoose.model(QUESTIONS_TABLE_NAME);
  await Questions.insertMany(questions);

  process.exit();
}

buildDb();
