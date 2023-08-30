import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, Collapse } from '@mui/material';

export const MyTable = () => {
  const [showTableBody, setShowTableBody] = useState(true);

  const toggleTableBody = () => {
    setShowTableBody(!showTableBody);
  };

  const data = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Alice Johnson', age: 28 },
  ];

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>
              <Button variant="contained" color="primary" onClick={toggleTableBody}>
                {showTableBody ? 'Hide' : 'Show'}
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={4}>
              <Collapse in={showTableBody} timeout="auto" unmountOnExit>
                <Table>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.age}</TableCell>
                        <TableCell>{/* Content for the fourth column */}</TableCell>
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

