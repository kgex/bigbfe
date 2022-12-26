import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { AllRequestListToolbar } from '../components/inventory/all-request-list-toolbar';
import { AllRequestList } from '../components/inventory/request-all-list';
import { DashboardLayout } from '../components/dashboard-layout';
import { request } from '../__mocks__/request';
import React, { useReducer, useState } from 'react';
import api from '../utils/api';
import { useEffect } from 'react';


const Allrequest = (props) => {

  const [userrequest,setUserrequest] = useState([])
  const [userId, setUserId] = useState(null);

  // useEffect (() => {

  //   console.log("Im here")
  //   console.log(props.nivu)

  //   const token = localStorage.getItem('token');
  //   console.log(token);

  //   const user = localStorage.getItem('user');
  //   setUserId(JSON.parse(user).user_id);

  //   console.log(userId)
  //   if(userId != null){
  //     api.get(
  //       `userprojects copys/${userId}/request`, {headers: {
  //         'Authorization': `bearer ${token}` 
  //       }})
  //         .then(res => {
  //         console.log(res.data);
  //         setUserrequest(res.data);
  //     })
  //   }


  // }, [userId])

  return (
  <>
    <Head>
      <title>
        Request | KGXperience
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
        <AllRequestListToolbar />
        <Box sx={{ mt: 3 }}>
          <AllRequestList request={request} />
        </Box> 
      </Container>
    </Box>
  </>
  );
}

Allrequest.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Allrequest;
