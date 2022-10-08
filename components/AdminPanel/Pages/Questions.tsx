import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DropDownMenu from '../../DropDownMenu';
import useQuestions from '../../../hooks/api/useQuestions';
import type { Question } from '../../../interfaces';

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
    width: 180,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'actions',
    headerName: '',
    width: 60,
    renderCell(option) {
      const question = option.row as Question;
      const isDraft = question.status === 'draft';

      const options = [
        {
          title: 'Delete',
          icon: <DeleteIcon />,
          onClick: () => {
            const selectedRowsMap = option.api.getSelectedRows();
            const selectedRows =
              selectedRowsMap.size > 0
                ? [...selectedRowsMap.keys()]
                : [option.id];
            deleteQuestions(selectedRows);
          },
        },
        {
          title: isDraft ? 'Publish' : 'Convert to Draft',
          icon: isDraft ? <CheckCircleIcon /> : <UnpublishedIcon />,
          disabled: option.api.getSelectedRows().size > 1,
          onClick: () => {
            updateQuestion({
              ...question,
              status: isDraft ? 'published' : 'draft',
            });
          },
        },
      ];

      return <DropDownMenu options={options} />;
    },
  },
];

const deleteQuestions = async (ids: string[]): Promise<void> => {
  const response = await fetch(`../api/questions`, {
    method: 'DELETE',
    body: JSON.stringify(ids),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await response.json();

  return json;
};

const updateQuestion = async (question) => {
  const response = await fetch(`../api/questions`, {
    method: 'PATCH',
    body: JSON.stringify(question),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
};

const QuestionsPage = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const { data, isLoading, isFetched } = useQuestions({ page, perPage });

  return (
    <Box sx={{ height: '75vh', width: '100%' }}>
      <DataGrid
        loading={isLoading || !isFetched}
        rows={data?.data ?? []}
        rowCount={data?.total ?? 0}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        pageSize={perPage}
        onPageSizeChange={(newPageSize) => setPerPage(newPageSize)}
        rowsPerPageOptions={[10, 25, 50]}
        page={page - 1}
        onPageChange={(newPage) => setPage(newPage + 1)}
        paginationMode="server"
      />
    </Box>
  );
};

export default QuestionsPage;
