import Head from "next/head";
import InventoryCard from "../components/inventory/inventory-card";
import { Box, Container, Grid, Item } from "@mui/material";
import {
  InventoryListResults,
  ReportListResults,
} from "../components/inventory/inventory-list-results";
import {
  InventoryListToolbar,
  ReportListToolbar,
} from "../components/inventory/inventory-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import React, { useReducer, useState } from "react";
import api from "../utils/api";
import { useEffect } from "react";

const Inventory = (props) => {
  const user = localStorage.getItem("user");
  user = JSON.parse(user);
  const [userId, setUserId] = useState(null);

  const getData = (values) => {
    api.post(`users/${userId}/report`, values).then((res) => {
      router.push("/reports");
    });
  };

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Inventory | KGXperience</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <InventoryListToolbar role={user.role} />
          <Grid container spacing={9} sx={{ justifyContent: "center" }}>
            <Grid item xs="auto">
              <InventoryCard
                Img="https://www.raspberrypi.org/app/uploads/2019/06/HERO-ALT.jpg"
                count={10}
                Name={"Raspberry Pi"}
              />
            </Grid>
            <Grid item xs="auto">
              <InventoryCard
                Img="https://static4.arrow.com/-/media/arrow/images/820-x-410/1/1117_arduino_uno_overview_820.jpg?mw=734&hash=FD3239B2764233C47AF6B1970558375B"
                count={10}
                Name={" Arduino"}
              />
            </Grid>
            <Grid item xs="auto">
              <InventoryCard
                Img="https://protosupplies.com/wp-content/uploads/2018/12/Solderless-Breadboard-830-Pro-Line-800x600.jpg"
                count={10}
                Name={"Breadboard"}
              />
            </Grid>
            <Grid item xs="auto">
              <InventoryCard
                Img="https://protosupplies.com/wp-content/uploads/2018/07/ESP8266-NodeMCU-V1.0-ESP-12E-WiFi-Module.jpg"
                count={10}
                Name={"NodeMCU"}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>{/* <InventoryListResults /> */}</Box>
        </Container>
      </Box>
    </>
  );
};
Inventory.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Inventory;
