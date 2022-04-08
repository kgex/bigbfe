import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import {StudentProfile } from '../components/student/student-profile';
import { StudentProfileDetails } from '../components/student/student-profile-details';
import { DashboardLayout } from '../components/dashboard-layout';
import { useEffect } from 'react';
import api from '../utils/api';
import React, { useState } from 'react';

const Student = () => {

  const [fullName, setFullname] = useState("");
  const [email,setEmail] = useState("")

  useEffect (() => {

    console.log("Im here")

    const token = localStorage.getItem('token');
    console.log(token);

    api.get(
      `users/me/`, {headers: {  
        'Authorization': `bearer ${token}` 
      }}).then(res => {
        console.log(res);
        console.log(res.data);  
        setFullname(res.data.full_name);
        setEmail(res.data.email)
        console.log("#######", fullName);
    })

  })

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
          Account
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <StudentProfile name={fullName} email={email} />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <StudentProfileDetails name={fullName} email={email} />
          </Grid>
        </Grid>
        
      </Container>
    </Box>
  </>
)
}

Student.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Student;
