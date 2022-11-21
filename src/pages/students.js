import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { StudentListResults } from '../components/student/students-list-results';
import { DashboardLayout } from '../components/dashboard-layout';
import React, { useReducer, useState } from 'react';
import api from '../utils/api';
import { useEffect } from 'react';

const StudentList = (props) => {

  const [userStudents, setUserStudents] = useState([])
  const [userId, setUserId] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    setUserId(JSON.parse(user).user_id);

    if (userId != null) {
      api.get(
        `/users/?skip=0&limit=200`, {
        headers: {
          'Authorization': `bearer ${token}`
        }
      })
        .then(res => {
          setUserStudents(res.data);
        }).catch(err => {
          console.log("error log")
          console.log(err);
        })
    }


  }, [userId])

  return (
    <>
      <Head>
        <title>
          Students | KGXperience
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
          <Box sx={{ mt: 3 }}>
            <StudentListResults students={userStudents} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

StudentList.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default StudentList;
