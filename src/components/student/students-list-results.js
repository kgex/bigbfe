import { useEffect, useState } from 'react';
import { IconButton } from "@mui/material";
import React from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import { Download as DownloadIcon } from '../../icons/download';
import router from 'next/router';

import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Collapse,
  Paper,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@mui/material';
import { SeverityPill } from '../severity-pill';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>


      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

        <TableCell align="center">{row.id}</TableCell>
        <TableCell align="center">{row.full_name}</TableCell>
        <TableCell align="center">{row.register_num}</TableCell>
        <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center">{row.rfid_key}</TableCell>
        <TableCell align="center">{row.college}</TableCell>
        <TableCell align="center">{row.dept}</TableCell>
        {/* <TableCell align="center">{row.join_year}</TableCell>
        <TableCell align="center">{row.grad_year}</TableCell>
        <TableCell align="center">{row.gender}</TableCell> */}
        <TableCell>
          <SeverityPill
            color={
              row.is_active ? 'success' : 'error'
            }
          >
            {row.is_active ? 'Active' : 'Not Activated'}
          </SeverityPill>
        </TableCell>

        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {row.description}
              </Typography>

            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

    </React.Fragment>
  );
}


export const StudentListResults = ({ students, ...rest }) => {

  const [searched, setSearched] = useState("");
  const [rows, setRows] = useState(students);
  const [limit, setLimit] = useState(200);
  const [page, setPage] = useState(0);

  const onClickHandle = (e) => {
    router.push('/student');
    console.log('You clicked');
  }

  const requestSearch = (searchedVal) => {
    console.log(searchedVal);
    const filteredRows = students.filter((row) => {
      return row.full_name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  useEffect(() => {
    setRows(students);
  }, [students])

  return (
    <>
      <Box >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            m: -1
          }}
        >
          <Typography
            sx={{ m: 1 }}
            variant="h4"
          >
            Students
          </Typography>
          <Box sx={{ m: 1 }}>
            <Button
              startIcon={(<UploadIcon fontSize="small" />)}
              sx={{ mr: 1 }}
            >
              Import
            </Button>
            <Button
              startIcon={(<DownloadIcon fontSize="small" />)}
              sx={{ mr: 1 }}
            >
              Export
            </Button>


            <Button
              color="primary"
              variant="contained"
              onClick={onClickHandle}
            >
              Add Students
            </Button>


          </Box>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Card>
            <CardContent>
              <Box sx={{ maxWidth: 500 }}>
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon
                          color="action"
                          fontSize="small"
                        >
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                  placeholder="Search student"
                  variant="outlined"
                  value={searched}
                  onChange={(e) => {
                    setSearched(e.target.value);
                    requestSearch(e.target.value);
                  }}

                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Card {...rest}
        style={
          {
            overflowX: "auto"
          }

        }
      >
        <PerfectScrollbar>
          <Paper className={students.root}>
            <Box sx={{ minWidth: 1050 }}>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      User Id
                    </TableCell>
                    <TableCell align="center">
                      Full Name
                    </TableCell>
                    <TableCell align="center">
                      Register Number
                    </TableCell>
                    <TableCell align="center">
                      Email
                    </TableCell>
                    <TableCell align="center">
                      RFID Key
                    </TableCell>
                    <TableCell align="center">
                      College
                    </TableCell>
                    <TableCell align="center">
                      Department
                    </TableCell>
                    {/* <TableCell align="center">
                      Join Year
                    </TableCell>
                    <TableCell align="center">
                      Grad Year
                    </TableCell>
                    <TableCell align="center">
                      Gender
                    </TableCell> */}
                    <TableCell align="center">
                      Active
                    </TableCell>
                    <TableCell align="center">
                      More
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows.slice(0, limit).map((item, index) => (
                    <Row key={index}
                      row={item} />
                  ))}

                </TableBody>
              </Table>

            </Box>
          </Paper>

        </PerfectScrollbar>
      </Card>
    </>

  );
};

