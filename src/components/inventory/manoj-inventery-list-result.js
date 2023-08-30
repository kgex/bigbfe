import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, Collapse } from '@mui/material';
import styles from './MyTable.module.css'
import styled from 'styled-components';


export const MyTable = () => {
  const [showTableBody, setShowTableBody] = useState(true);

  const toggleTableBody = () => {
    setShowTableBody(!showTableBody);
  };

  const CurvedButton = styled(Button)`
  border-radius: 20px; /* Adjust the value to control the level of curvature */
`;


  const data = [
    {
        "id": 1,
        "productname": "Smartphone",
        "purchasedate": "2023-08-30",
        "returndate": "2023-09-05",
        "status": "In purchase"
    },
    {
        "id": 2,
        "productname": "Laptop",
        "purchasedate": "2023-08-28",
        "returndate": "2023-09-02",
        "status": "In purchase"
    },
    {
        "id": 3,
        "productname": "Headphones",
        "purchasedate": "2023-08-25",
        "returndate": null,
        "status": "Returned"
    }
]

  return (
    <Paper>
      <Button variant="contained" color="primary" onClick={toggleTableBody}>
        {showTableBody ? 'Hide' : 'Show'}
      </Button>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{ minWidth: '100px' }}>ID</TableCell>
            <TableCell style={{ minWidth: '150px' }}>Product Name</TableCell>
            <TableCell style={{ minWidth: '150px' }}>Purchase Date</TableCell>
            <TableCell style={{ minWidth: '150px' }}>Return Date</TableCell>
            <TableCell style={{ minWidth: '150px' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={6}>
              <Collapse in={showTableBody} timeout="auto" unmountOnExit>
                <Table>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell style={{ minWidth: '100px' }}>{row.id}</TableCell>
                        <TableCell style={{ minWidth: '150px' }}>{row.productname}</TableCell>
                        <TableCell style={{ minWidth: '150px' }}>{row.purchasedate}</TableCell>
                        <TableCell style={{ minWidth: '150px' }}>{row.returndate}</TableCell>
                        <TableCell style={{ minWidth: '150px' }}> 
                            <CurvedButton variant="contained" color={row.status === "In purchase"? "success" : "error"}>
                                    {row.status}
                            </CurvedButton>
                         </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Collapse>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};
