import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Container, Grid, Typography } from "@mui/material";
import { AccountProfile } from "../components/account/account-profile";
import { UserReports } from "../components/reports/user-reports";
import { DashboardLayout } from "../components/dashboard-layout";
import React, { useState, useEffect } from "react";
import api from "../utils/api";

const Report = () => {
  const router = useRouter();

  const [userId, setUserId] = useState(null);

  const getData = (values) => {
    api.post(`users/${userId}/report`, values).then((res) => {
      router.push("/reports");
    });
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUserId(JSON.parse(user).user_id);
  }, []);

  return (
    <>
      <Head>
        <title>Report | KGXperience</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Add Report
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={18} md={6} xs={12}>
              <UserReports getData={getData} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Report.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Report;
