import Head from "next/head";
import { Box, Container } from "@mui/material";
import { ProjectList } from "../components/projects/projects-list";
import { ProjectListToolbar } from "../components/projects/project-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { projectsmocks } from "../__mocks__/projects";
import React, { useReducer, useState } from "react";
import api from "../utils/api";
import { useEffect } from "react";

const Projects = (props) => {
  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    api
      .get(
        //need to change
        `clients/${1}/projects`
      )
      .then((res) => {
        setUserProjects(res.data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Projects | KGXperience</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
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
};

Projects.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Projects;
