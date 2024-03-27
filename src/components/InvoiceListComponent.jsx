import React from 'react'
import DataTable from './DataTable';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function InvoiceListComponent() {

  return (
    <>
      <Stack spacing={1} direction="row">
        <Button variant="contained">Contained</Button>
      </Stack>
      <DataTable />
    </>
  )
}

export default InvoiceListComponent;
