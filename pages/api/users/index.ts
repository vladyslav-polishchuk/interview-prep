import { NextApiRequest, NextApiResponse } from 'next';
import getConnection from '../../../db/getConnection';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await getConnection();

    const movies = await db
      .collection('questions')
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();

    res.status(200).json(movies);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
