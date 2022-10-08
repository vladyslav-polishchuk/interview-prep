import { StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  getQuestions,
  updateQuestion,
  deleteQuestions,
} from '../../prisma/api/questions';
import type { QuestionStatus } from '../../interfaces';

const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query } = req;
    const { page, perPage, role, section, status, sortBy, sortDirection } =
      query;

    const where = {
      ...(typeof role === 'string' && { role }),
      ...(typeof section === 'string' && { section }),
      ...(typeof status === 'string' && { status }),
    };
    const orderBy =
      typeof sortBy === 'string' ? { [sortBy]: sortDirection } : undefined;

    const result = await getQuestions({
      page: Number(page),
      perPage: Number(perPage),
      // @ts-ignore
      where,
      // @ts-ignore
      orderBy,
    });

    res.status(StatusCodes.OK).json(result);
  } catch (err: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err: err.message });
  }
};

const handleUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await updateQuestion(req.body);

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
      case 'PATCH':
        return handleUpdate(req, res);
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
