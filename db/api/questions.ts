import mongoose from 'mongoose';
import { QUESTIONS_TABLE_NAME } from '../schema';
import connectToDb from '../connect';

const Questions = mongoose.model(QUESTIONS_TABLE_NAME);

export const getQuestions = async () => {
  await connectToDb();

  return await Questions.find();
};
