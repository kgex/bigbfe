import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { StudentListResults } from '../components/student/students-list-results';
import { StudentListToolbar } from '../components/student/student-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import React, { useReducer, useState } from 'react';
import api from '../utils/api';
import { useEffect } from 'react';

const StudentList = (props) => {

  const [userStudents, setUserStudents] = useState([])
  const [userId, setUserId] = useState(null);

  useEffect(() => {

    console.log("Im here")

    const token = localStorage.getItem('token');
    console.log(token);

    const user = localStorage.getItem('user');
    setUserId(JSON.parse(user).user_id);

    console.log(userId)
    if (userId != null) {
      api.get(
        `/users`, {
        headers: {
          'Authorization': `bearer ${token}`
        }
      })
        .then(res => {
          console.log(res.data);
          setUserStudents(res.data);
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
          <StudentListToolbar />
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
