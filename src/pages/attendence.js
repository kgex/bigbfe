import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { StudentList } from "../components/studentList"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Stack, Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function getDaysInCurrentMonth() {
    const date = new Date();

    return new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();
}

const result = getDaysInCurrentMonth();
console.log(result);



const data = [
    {
        id: 1,
        student: "siva",
        attendence: []
    },
    {
        id: 2,
        student: "siva",
        attendence: []
    },
    {
        id: 3,
        student: "siva",
        attendence: []
    },
]

const style = {
    width: '100%',
    maxWidth: "100%",
    bgcolor: 'background.paper',
};



export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <List sx={style} component="nav" aria-label="mailbox folders">

                {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 12, md: 12 }}> */}


                <Grid textAlign="center" >


                    <ListItem button sx={{ display: "flex", textAlign: "center", alignItem: "center" }}>

                        <Grid item xs={3} alignContent="center" sx={{ textAlign: "center" }}>
                            <ListItemText sx={{ display: "flex", textAlign: "center", alignItem: "center" }}  >

                                <Typography align="center" sx={{ display: "flex", textAlign: "center", alignItem: "center" }} variant="h5" display="block" gutterBottom>

                                    STUDENTS

                                </Typography>



                            </ListItemText>
                        </Grid>

                        <Grid item xs={10} sx={{ display: "flex" }}>
                            {[...Array(result)].map((elementInArray, index) => (


                                <ListItemText sx={{ display: "flex" }} key={index}>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            '& > :not(style)': {
                                                m: 1,
                                                width: 20,
                                                height: 20,

                                            },
                                        }}
                                    >
                                        <Typography sx={{ display: "flex", textAlign: "center", alignItem: "center" }} align="center" variant="button" display="block" gutterBottom>
                                            {index + 1}
                                        </Typography>


                                    </Box>
                                </ListItemText>

                            )
                            )}
                        </Grid>
                    </ListItem>
                    <Divider />

                </Grid>


                <Grid>

                    {
                        data.map((item, i) => (

                            <Stack direction="row" spacing={2} sx={{ display: "flex", textAlign: "center", alignItem: "center" }} key={i}>

                                <List sx={style} component="nav" aria-label="mailbox folders">
                                    <ListItem button>

                                        {[...Array(result)].map((elementInArray, index) => (
                                            <ListItemText sx={{ display: "flex" }}
                                                key={index}>


                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexWrap: 'wrap',
                                                        '& > :not(style)': {
                                                            m: 1,
                                                            width: 20,
                                                            height: 20,
                                                            backgroundColor: "#000"
                                                        },
                                                    }}
                                                >
                                                    <Paper elevation={0} />

                                                </Box>

                                            </ListItemText>
                                        )
                                        )}



                                    </ListItem>
                                    <Divider />

                                </List>
                            </Stack>
                        ))
                    }



                </Grid>

                {/* </Grid> */}

            </List>
        </Box>
    );
}
