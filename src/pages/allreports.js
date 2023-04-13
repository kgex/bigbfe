import Head from "next/head";
import { Box, Container } from "@mui/material";
import { AllReportListToolbar } from "../components/allreports/all-report-list-toolbar";
import { AllReportList } from "../components/allreports/report-all-list";
import { DashboardLayout } from "../components/dashboard-layout";
import { reports } from "../__mocks__/reports";
import React, { useReducer, useState } from "react";
import api from "../utils/api";
import { useEffect } from "react";

const AllReports = (props) => {
  const [userReports, setUserReports] = useState([]);
  const [userId, setUserId] = useState(null);

  // useEffect (() => {

  //

  //   const token = localStorage.getItem('token');

  //   const user = localStorage.getItem('user');
  //   setUserId(JSON.parse(user).user_id);

  //   if(userId != null){
  //     api.get(
  //       `userprojects copys/${userId}/reports`, {headers: {
  //         'Authorization': `bearer ${token}`
  //       }})
  //         .then(res => {
  //         setUserReports(res.data);
  //     })
  //   }

  // }, [userId])

  return (
    <>
      <Head>
        <title>Reports | KGXperience</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <AllReportListToolbar />
          <Box sx={{ mt: 3 }}>
            <AllReportList reports={reports} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

AllReports.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AllReports;
