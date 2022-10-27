import NextLink from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import qs from 'qs'
import api from "../utils/api"
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography, fabClasses,Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// sections
import {EnterEmail, NewPassword, OtpVerify} from '../components/forgotpassword';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function ForgotPassword() {

  // success -> changed 
  // failed -> no

  const router = useRouter()

  const [status, setStatus] = useState({});


  const handleClose = () => {
    router.push("/login")
  };

  const [email,setEmail] = useState("")

  const [resetPageView, setResetPageView] = useState(false)

  const verifyEmail = (values) => {
    setEmail(values)
    console.log(qs.stringify(values)) 
    // https://bigbbe.herokuapp.com/forgotpass?user_email=sathasivam.t2019%40kgkite.ac.inx
    api.post(`/forgotpass?${qs.stringify(values)}`,values)
        .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(qs.stringify(values))
        setResetPageView(true);
    })
  }


  //   const otpData = (values) =>{

  //     // enterotp?user_email=sathasivam%40gmail.com&otp=123
  //     console.log(values);
  //     api.post(`/enterotp?${qs.stringify(values)}&otp=${values}`,values)
  //     .then(res => {
  //       setResetPageView("password");
  //     console.log(res);
  //     console.log(res.data);
  //   })
   
  // }
  
  console.log(email);


const passwordData = (values) =>{
  console.log(values)
  console.log({...values,email : email.user_email});
  api.post(`enterotp`,{...values,email : email.user_email})
  .then(res => {
    console.log(res.data.status)
    if(res.data.status === "failure"){
      setStatus("failed")
    }else{
      setStatus("success")
    }
  }).catch(error =>{
   
    console.log("error setting password ",error);
  })
}




  return (
    <>
        <Head>
        <title>Login | KGXperience</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >

        {
              resetPageView ? <NewPassword passwordData={passwordData}/>: <EnterEmail verifyEmail={verifyEmail}/> 
        }

  <div>
  
      <Dialog
        open={status === "success" || status === "failed"}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {status}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {
              status === "success" ? `Your password was successfully changed` : `Sorry, something went wrong. Please try again` 
              
            } 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            {
              status === "success" ? `Login again` : `Ok`
            }
          </Button>
        </DialogActions>
      </Dialog>
    </div>

      </Box>

      </>
  );
}
