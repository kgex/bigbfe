import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook as FacebookIcon } from '../icons/facebook';
import { Google as GoogleIcon } from '../icons/google';
import { ImportExport } from '@mui/icons-material';
import { VpnKeyOutlined } from '@mui/icons-material';
import { PersonAddAlt1Outlined } from '@mui/icons-material';
import api from "../utils/api";
import qs from 'qs';

const Home = () => {
  const router = useRouter();

  return (
    <>

      <Head>
        <title>Home | KGXperience</title>
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
      <Container maxWidth="sm">
      <Box
        component="img"
        sx={{
          height: 133,
          width: 250,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          marginLeft:"auto",
          marginRight:"auto",
          display:"flex" ,
          alignItems:"center",
          justifyContent:"center",
        }}
        alt="The house from the offer."
        src="/static/images/kgxfull.png"
      />
        {/* <img
            alt="Go to pro"
            src="/static/images/kgxfull.png"
          /> */}



        <Box
        sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1,justifyContent:"space-evenly", }}
      >
          <NextLink
            href="/login"
            passHref
            
          >
            <Button
              
              variant="contained"
              sx={{marginLeft:"12%", backgroundColor:"text.primary"}}
              startIcon={<VpnKeyOutlined fontSize="small" />}
            >
              Sign In
            </Button>
          </NextLink>




          <NextLink
            href="/register"
            passHref
            
          >
            <Button
             
              variant="contained"
              sx={{marginRight:"12%",backgroundColor:"text.primary"}}
              startIcon={<PersonAddAlt1Outlined fontSize="small" />}
            >
              Sign Up
            </Button>
          </NextLink>
          </Box>

      </Container>
      </Box>
    </>
  );
};

export default Home;
