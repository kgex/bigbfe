import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import PaperContentComponent from './data'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {Grid,Item } from '@mui/material';
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
  const increase=()=>{
    setCount(counter+1)
  }
  const decrease=()=>{
    setCount(counter-1)
  }
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
        <Grid container spacing={2}>
          <Grid item xs={12} >
          <Card sx={{boxShadow: 10,width:"20pc"}}>
                <CardMedia
                  component="img"
                  height="180"
                  image={props.Img}
                  alt="green iguana"/>
                <h3 style={{textAlign:"center"}}> {props.component_name}</h3>
            </Card>
          </Grid>
          <Grid item xs={5} md={4} sx={{textAlign:"center"}}>
            <IconButton sx={{backgroundColor:"#ebebe0"}} onClick={decrease} > 
                  <RemoveIcon/>
            </IconButton>
              Qty:{counter}
            <IconButton sx={{backgroundColor:"#ebebe0"}}onClick={increase}>
              <AddIcon/>
            </IconButton>
          </Grid>
          <Grid item xs={7} md={8}  >
            <PaperContentComponent/>
          </Grid>
          <Grid item xs={5} md={4}sx={{textAlign:"center"}} >
          <Button variant="contained">
            Request
          </Button>
          </Grid>
        </Grid>
        </BootstrapDialogTitle>
      </BootstrapDialog>
    </div>
  );
}