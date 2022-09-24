import { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DropDownMenu from '../../DropDownMenu';
import useQuestions from '../../../hooks/api/useQuestions';

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
  {
    field: 'actions',
    headerName: '',
    width: 60,
    renderCell(option) {
      const options = [
        {
          title: 'Delete',
          onClick: () => {
            const selectedRowsMap = option.api.getSelectedRows();
            const selectedRows =
              selectedRowsMap.size > 0
                ? [...selectedRowsMap.keys()]
                : [option.id];
            deleteQuestions(selectedRows);
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

const QuestionsPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetched } = useQuestions({ page });

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
