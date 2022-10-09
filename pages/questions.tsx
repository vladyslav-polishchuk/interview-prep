import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  CircularProgress,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import Layout from '../components/Layout';
import { useInfiniteQuestions } from '../hooks/api/useQuestions';
import Markdown from '../components/common/Markdown';

const QUESTIONS_PER_PAGE = 5;

const QuestionsPage = () => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuestions({
      page: 1,
      perPage: QUESTIONS_PER_PAGE,
      status: 'published',
    });
  const pages = data?.pages ?? [];
  const questions = pages.reduce((acc, page) => {
    return [...acc, ...page.data];
  }, []);

  const content = isLoading
    ? [...Array(QUESTIONS_PER_PAGE)].map((val, index) => (
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

      <Box sx={{ my: 2, display: 'flex', flexDirection: 'column' }}>
        {content}

        {hasNextPage && (
          <Button
            variant="outlined"
            sx={{ width: '150px', alignSelf: 'center' }}
            onClick={() => fetchNextPage()}
            disabled={isLoading || isFetchingNextPage}
          >
            {isFetchingNextPage && (
              <CircularProgress sx={{ mr: 1 }} size="20px" />
            )}
            Load More
          </Button>
        )}
      </Box>
    </Layout>
  );
};

export default QuestionsPage;
