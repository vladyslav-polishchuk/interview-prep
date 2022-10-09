import { useState } from 'react';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import Layout from '../components/Layout';
import useQuestions from '../hooks/api/useQuestions';
import Markdown from '../components/common/Markdown';

const QuestionsPage = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const { data, isLoading } = useQuestions({
    page,
    perPage,
    status: 'published',
  });
  const { data: questions, total } = data ?? {};
  const content = isLoading
    ? [...Array(page)].map((val, index) => (
        <Skeleton variant="rounded" height={56} key={index} sx={{ mb: 1 }} />
      ))
    : questions.map((question) => {
        return (
          <Accordion key={question.title} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography alignSelf="center" sx={{ flexGrow: 1 }}>
                {question.title}
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mr: 1 }}>
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
              <Markdown>{question.answer}</Markdown>
            </AccordionDetails>
          </Accordion>
        );
      });

  return (
    <Layout title="Interview Questions">
      <h1>Interview Questions</h1>

      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>

      <Box sx={{ my: 2 }}>{content}</Box>
    </Layout>
  );
};

export default QuestionsPage;
