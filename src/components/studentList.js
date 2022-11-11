import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const style = {
  width: '100%',
  maxWidth: "100%",
  bgcolor: 'background.paper',
};

export default function StudentList() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: 20,
                    height: 20,
                    backgroundColor : "#000"
                    },
                }}
                >
            <Paper elevation={0} />
            <Paper />
            <Paper elevation={3} />
        </Box>
        </ListItemText>
      </ListItem>
      <Divider />

    </List>
  );
}
