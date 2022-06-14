import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile } from '../components/account/account-profile';
import {UserReports} from "../components/reports/user-reports"
import { DashboardLayout } from '../components/dashboard-layout';
import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import { UserInventory } from 'src/components/inventory/user-inventory';

const addInventory = () => {
  const router = useRouter();

  const [userId, setUserId] = useState(null);

  const getData = (values) => {
    console.log(values)
    console.log(userId)

    // api.post(
    //   `users/${userId}/report`,values)
    //     .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //     router.push('/reports');  
    // })
  }

  useEffect (() => {




  }, [])

  return (
  <>
    <Head>
      <title>
        Add Inventory | KGXperience
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Add Inventory
        </Typography>
        <Grid
          container
          spacing={3}
        >
      
          <Grid
            item
            lg={18}
            md={6}
            xs={12}
          >
          </Grid>
        </Grid>
        <UserInventory/>
      </Container>
    </Box>
  </>
)
}

addInventory.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default addInventory;
