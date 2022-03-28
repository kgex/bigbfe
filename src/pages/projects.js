import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { ProjectList } from '../components/projects/projects-list';
import { ProjectListToolbar } from '../components/projects/project-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { projectsmocks } from '../__mocks__/projects';
import React, { useReducer, useState } from 'react';
import api from '../utils/api';
import { useEffect } from 'react';

const Projects = (props) => {

  const [userProjects,setUserProjects] = useState([])
  const [clientId, setClientId] = useState(null);

  useEffect (() => {

    console.log("Im here")
    

    const client = localStorage.getItem('client');
    console.log(JSON.parse(client)[0].id)
    setClientId(JSON.parse(client)[0].id);

    console.log(clientId)
    if(clientId != null){
      api.get(
          //need to change
        `clients/${clientId}/projects`)
          .then(res => {
          console.log(res.data);
          setUserProjects(res.data);
      })
    }


  }, [])

  console.log(userProjects)
  return (
  <>
    <Head>
      <title>
        Reports | KGXperience
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
        <ProjectListToolbar />
        <Box sx={{ mt: 3 }}>
          <ProjectList projects={userProjects} />
        </Box>
      </Container>
    </Box>
  </>
  );
}

Projects.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Projects;
