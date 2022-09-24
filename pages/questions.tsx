import { useState } from 'react';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import Layout from '../components/Layout';
import useQuestions from '../hooks/api/useQuestions';

const QuestionsPage = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(50);
  const { data, isLoading } = useQuestions({
    page,
    perPage,
    status: 'published',
  });
  const { data: questions, total } = data ?? {};

  return (
    <Layout title="Interview Questions">
      <h1>Interview Questions</h1>

      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>

      {isLoading
        ? 'LOADING...'
        : questions.map((question) => {
            return (
              <Accordion key={question.title}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography alignSelf="center">{question.title}</Typography>

                  <Stack direction="row" spacing={1}>
                    <Chip
                      label={question.role}
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      label={question.section}
                      color="primary"
                      variant="outlined"
                    />
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{question.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
    </Layout>
  );
};

export default QuestionsPage;
