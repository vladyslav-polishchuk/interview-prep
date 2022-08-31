import * as dotenv from 'dotenv';

import connect from './connect';
import { Questions } from './schema';
import questions from './initialData/questions';

dotenv.config({
  path: './.env.local',
});

async function buildDb() {
  await connect();

  await Questions.insertMany(questions);

  process.exit();
}

buildDb();
