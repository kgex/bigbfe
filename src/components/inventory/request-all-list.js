import { useState } from 'react';
import {IconButton,Button,Grid} from "@mui/material";
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

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const data =()=>{
    console.log(row.task_type)
    console.log(row.No)
    console.log(row.name)
  }
  return (
    <React.Fragment>
       
    
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      
      
        <TableCell align="center">{row.task_type}</TableCell>
        <TableCell align="center">{row.No}</TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center" >  
        <Grid item xs="auto" container  justifyContent="space-evenly">
            <Button variant="contained" onClick={data} >
                Approve
            </Button>
            <Button variant="contained" color="error" onClick={data}>
                Denied
            </Button>
        </Grid>    
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


export const AllRequestList = ({ request, ...rest }) => {
  const [open, setOpen] = useState(false);

  request.map(item =>{
    console.log(item.title)
  })

  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  // const handleSelectAll = (event) => {
  //   let newSelectedCustomerIds;

  //   if (event.target.checked) {
  //     newSelectedCustomerIds = customers.map((customer) => customer.id);
  //   } else {
  //     newSelectedCustomerIds = [];
  //   }

  //   setSelectedCustomerIds(newSelectedCustomerIds);
  // };

  // const handleSelectOne = (event, id) => {
  //   const selectedIndex = selectedCustomerIds.indexOf(id);
  //   let newSelectedCustomerIds = [];

  //   if (selectedIndex === -1) {
  //     newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
  //   } else if (selectedIndex === 0) {
  //     newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
  //   } else if (selectedIndex === selectedCustomerIds.length - 1) {
  //     newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelectedCustomerIds = newSelectedCustomerIds.concat(
  //       selectedCustomerIds.slice(0, selectedIndex),
  //       selectedCustomerIds.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelectedCustomerIds(newSelectedCustomerIds);
  // };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  
  return (
    <Card {...rest} 
      style={
        {
          overflowX:"auto"
        }

      }
    >
      <PerfectScrollbar>
      <Paper className={request.root}>
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
                  Project Name
                </TableCell>
                <TableCell align="center">
                  No Of Person's
                </TableCell>
                <TableCell align="center">
                  Name's
                </TableCell>
                <TableCell align="center">
                Description
                </TableCell>
                <TableCell align="center">
                    Status
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {request.slice(0, limit).map((item, index) => (     

                <Row key={index} row={item} />

              ))}
              
            </TableBody>
          </Table>
           
      <TablePagination
        style={{
         
        }}
        component="div"
        count={request.length}
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

