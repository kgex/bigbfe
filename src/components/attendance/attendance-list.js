import { useState } from 'react';
import { IconButton } from "@mui/material";
import React from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Avatar,
  Box,
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
  Paper
} from '@mui/material';
import {
  Button,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Search as SearchIcon } from '../../icons/search';

function CustomRow(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>


      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>


        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.attendance.in_time}</TableCell>
        <TableCell align="center">{row.attendance.out_time}</TableCell>
        <TableCell align="center">{row.attendance.user_id}</TableCell>
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


export const AttendanceListResults = ({ attendances, ...rest }) => {
  const [open, setOpen] = useState(false);

  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };


  const onClickHandle = (e) => {
    router.push('/report');
    console.log('You clicked');
  }


  return (
    <Card {...rest}
      style={
        {
          overflowX: "auto"
        }

      }
    >
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
            Attendance
          </Typography>

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
                  placeholder="Search report"
                  variant="outlined"
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <PerfectScrollbar>
        <Paper className={attendances.root}>
          <Box sx={{ minWidth: 1050 }}>

            <Table>
              <TableHead>
                <TableRow>
                  {/* <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell> */}
                  <TableCell align="center">
                    Type
                  </TableCell>
                  <TableCell align="center">
                    Title
                  </TableCell>
                  <TableCell align="center">
                    Start Time
                  </TableCell>
                  <TableCell align="center">
                    Stop Time
                  </TableCell>
                  <TableCell align="center">
                    Description
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {attendances.slice(0, limit).map((item, index) => (

                  <CustomRow key={index}
                    row={item} />

                ))}

              </TableBody>
            </Table>

            <TablePagination
              style={{

              }}
              component="div"
              count={attendances.length}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleLimitChange}
              page={page}
              rowsPerPage={limit}
              rowsPerPageOptions={[5, 10, 25]}
            />
          </Box>
        </Paper>

      </PerfectScrollbar>
    </Card>
  );
};

// CustomerListResults.propTypes = {
//   customers: PropTypes.array.isRequired
// };

