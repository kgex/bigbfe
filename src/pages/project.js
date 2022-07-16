import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile } from '../components/account/account-profile';
import { UserProjects } from "../components/projects/user-projects"
import { DashboardLayout } from '../components/dashboard-layout';
import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const Account = () => {
  const router = useRouter();

  const [userId, setUserId] = useState(null);
  const [clientId, setClientId] = useState(null)

  const getData = (values) => {
    console.log(values)

    api.post(
      `clients/${clientId}/project`, values)
      .then(res => {
        console.log(res);
        console.log(res.data);
        router.push('/projects');
      })
  }

  useEffect(() => {

    console.log("Im here")

    const user = localStorage.getItem('user');
    setUserId(JSON.parse(user).user_id);

    api.get(`clients`).then(res => {
      console.log("this is client ########", res.data)
      localStorage.setItem("client", JSON.stringify(res.data))

    })

    const client = localStorage.getItem('client');
    setClientId(JSON.parse(client)[0].id)
    console.log(clientId)
  }, [])

  return (
    <>
      <Head>
        <title>
          Account | KGXperience
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
            Add Project
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
              <UserProjects getData={getData} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

Account.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Account;
