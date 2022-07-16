import { useState } from 'react';
import {IconButton} from "@mui/material";
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

  return (
    <React.Fragment>
       
    
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      
      
        <TableCell align="center">{}</TableCell>
        <TableCell align="center">{}</TableCell>
        <TableCell align="center">{}</TableCell>
        <TableCell align="center">{}</TableCell>
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


export const InventoryListResults = () => {
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

  
  return (
    <Card  
      style={
        {
          overflowX:"auto"
        }

      }
    >
      <PerfectScrollbar>
      <Paper>
      <Box sx={{ minWidth: 1050 }}>
      
          <Table>
            <TableHead>
              <TableRow>
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
              {/* {reports.slice(0, limit).map((item, index) => (     

                <Row key={index} row={item} />

              ))} */}
              
            </TableBody>
          </Table>
           
      <TablePagination
        style={{
         
        }}
        component="div"
        // count={}
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

