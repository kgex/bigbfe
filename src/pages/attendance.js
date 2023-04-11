import Head from "next/head";
import { Box, Container } from "@mui/material";
import { AttendanceListResults } from "../components/attendance/attendance-list";
import { ReportListToolbar } from "../components/reports/report-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { reports } from "../__mocks__/reports";
import React, { useReducer, useState } from "react";
import api from "../utils/api";
import { useEffect } from "react";

const Attendance = (props) => {
  const [userAttendance, setUserAttendance] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const user = localStorage.getItem("user");
    setUserId(JSON.parse(user).user_id);

    if (userId != null) {
      api
        .get(`/attendance`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        })
        .then((res) => {
          setUserAttendance(res.data);
        });
    }
  }, [userId]);

  return (
    <>
      <Head>
        <title>Attendance | KGXperience</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ mt: 3 }}>
            <AttendanceListResults attendances={userAttendance} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Attendance.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Attendance;
