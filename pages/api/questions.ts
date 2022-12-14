import { StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import { getQuestions, deleteQuestions } from '../../db/api/questions';
import type { QuestionStatus } from '../../interfaces';

const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query } = req;
    const { page, perPage, role, section, status } = query;

    const result = await getQuestions({
      page: Number(page),
      perPage: Number(perPage),
      role: role as string,
      section: section as string,
      status: status as QuestionStatus,
    });

    res.status(StatusCodes.OK).json(result);
  } catch (err: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err: err.message });
  }
};

const handleDelete = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await deleteQuestions(req.body);

    res.status(StatusCodes.OK).json(result);
  } catch (err: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err: err.message });
  }
};

const index = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;

    switch (method) {
      case 'GET':
        return handleGet(req, res);
      case 'DELETE':
        return handleDelete(req, res);
      default:
        res.status(StatusCodes.METHOD_NOT_ALLOWED).json({});
        break;
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err: err.message });
  }
};

export default index;
