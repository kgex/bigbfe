import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { InventoryListResults, ReportListResults } from '../components/inventory/inventory-list-results';
import { InventoryListToolbar, ReportListToolbar } from '../components/inventory/inventory-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import React, { useReducer, useState } from 'react';
import api from '../utils/api';
import { useEffect } from 'react';

const Inventory = (props) => {

  useEffect (() => {

    


  }, [])

  return (
  <>
    <Head>
      <title>
        Inventory | KGXperience
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <InventoryListToolbar />
        <Box sx={{ mt: 3 }}>
          <InventoryListResults />
        </Box>
      </Container>
    </Box>
  </>
  );
}

Inventory.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Inventory;
