import NextLink from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import qs from 'qs'
import api from "../utils/api"
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography, fabClasses,Box } from '@mui/material';
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

  const email = ""

  const [resetPageView, setResetPageView] = useState("email")

  const verifyEmail = (values) => {
    console.log(qs.stringify(values)) 
    // https://bigbbe.herokuapp.com/forgotpass?user_email=sathasivam.t2019%40kgkite.ac.inx
    api.post(`/forgotpass?${qs.stringify(values)}`,values)
        .then(res => {
        console.log(res);
        console.log(res.data);
        email = qs.stringify(values)
        console.log(email)
        setResetPageView("otp");
    })
  }


  const otpData = (values) =>{

    // enterotp?user_email=sathasivam%40gmail.com&otp=123
    console.log(values);
    api.post(`/enterotp?${qs.stringify(values)}&otp=${values}`,values)
    .then(res => {
      setResetPageView("password");
    console.log(res);
    console.log(res.data);
  })
   
}
  

const passwordData = (values) =>{
  console.log(values);
  // api.post(`users/resetpass`,values)
  // .then(res => {
    // setResetPageView("password");
  // console.log(res);
  // console.log(res.data);
  // setResetPageView("otp");
  // })
  
}


 const renderComponent = (param) => {
    switch(param) {
      case 'email':
        return <EnterEmail verifyEmail={verifyEmail}/>
      case 'otp':
        return <OtpVerify otpData={otpData}/>
      case 'password':
        return <NewPassword passwordData={passwordData}/>
      default:
        return <EnterEmail verifyEmail={verifyEmail}/>
    }
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
            renderComponent(resetPageView)   
        }


      </Box>

      </>
  );
}
