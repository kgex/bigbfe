import * as React from 'react';
import PropTypes from 'prop-types';
import PaperContentComponent from './data'
import {TextField,Grid,Item,CardMedia,Card,Button,styled,Dialog,DialogTitle,IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 3 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >  
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);
  let [counter,setCount]=React.useState(0)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div >
      <Button  variant="contained" onClick={handleClickOpen} sx={{width:"100px",height:"35px"}}>
        {props.Name}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth="lg"
        maxWidth="lg">
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Grid container spacing={9}>
          <Grid  item xs="auto" width="fit-content" >
            <Card sx={{boxShadow: 10,width:"20pc"}} xs={6}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={props.Img}
                    alt="green iguana"/>
                  <h3 style={{textAlign:"center"}}> {props.component_name}</h3></Card>
          </Grid>
          <Grid item xs="auto" container direction="column" justifyContent="space-evenly">
              <TextField id="outlined-basic" label="Project Name"/><br/>
              <TextField id="outlined-basic" label="No Persons"/><br/>
          </Grid>
          <Grid item xs="auto"container direction="column" justifyContent="space-evenly">
          <TextField
                id="outlined-multiline-flexible"
                label="Name's"
                multiline
                maxRows={4} /><br/>
            <TextField
                   id="outlined-multiline-flexible"
                   label="Description"
                   multiline
                   maxRows={4}/><br/>
          </Grid>
          <Grid item xs={12}>
            <PaperContentComponent/>
          </Grid>
        </Grid>
        <Grid item xs="auto"container sx={{textAlign:"center"}} justifyContent= "space-evenly">
            <Button variant="contained" color="error">
              Status
            </Button>
            <Button variant="contained">
              Request
            </Button>
          </Grid>
        </BootstrapDialogTitle>
      </BootstrapDialog>
    </div>
  );
}