import { NextApiRequest, NextApiResponse } from 'next';
import { getQuestions } from '../../../db/api/questions';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const movies = await getQuestions();

    res.status(200).json(movies);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
