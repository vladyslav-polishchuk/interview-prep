import mongoose from 'mongoose';

export const QUESTIONS_TABLE_NAME = 'questions';

const questionsSchema = new mongoose.Schema({
  role: { type: String, unique: false, required: true },
  section: { type: String, unique: false, required: true },
  title: { type: String, unique: true, required: true, dropDups: true },
  answer: { type: String, unique: false, required: true },
});

export const Questions =
  mongoose.models[QUESTIONS_TABLE_NAME] ||
  mongoose.model(QUESTIONS_TABLE_NAME, questionsSchema);
