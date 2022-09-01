import { StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import { getQuestions } from '../../db/api/questions';

const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query } = req;
    const { page, perPage } = query;

    const result = await getQuestions({
      page: Number(page),
      perPage: Number(perPage),
    });

    res.status(StatusCodes.OK).json(result);
  } catch (err: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err: err.message });
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;

    switch (method) {
      case 'GET':
        return handleGet(req, res);
      default:
        res.status(StatusCodes.METHOD_NOT_ALLOWED).json({});
        break;
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err: err.message });
  }
};
