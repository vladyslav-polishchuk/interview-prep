import { useState } from 'react';
import { useQuery } from 'react-query';

import type { PaginatedResult, Question } from '../../../interfaces';

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'role', headerName: 'Role', width: 90 },
  {
    field: 'section',
    headerName: 'Section',
    width: 120,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 250,
  },
  {
    field: 'answer',
    headerName: 'Answer',
    width: 200,
  },
];

const fetchQuestions = async (page): Promise<PaginatedResult<Question[]>> => {
  const response = await fetch(`../api/questions`);
  const json = await response.json();
  return json;
};

const QuestionsPage = () => {
  const page = useState(1);
  const { data, isLoading, isFetched } = useQuery<PaginatedResult<Question[]>>(
    ['questions', 'user', page],
    () => fetchQuestions(page),
    {},
  );

  console.log(data);

  return (
    <Box sx={{ height: 400, width: '100%' }} padding={1}>
      <DataGrid
        rows={data?.data ?? []}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        getRowId={(row) => row._id}
      />
    </Box>
  );
};

export default QuestionsPage;
