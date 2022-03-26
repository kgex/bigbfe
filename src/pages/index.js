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

        <img
            alt="Go to pro"
            src="/static/images/kgxfull.png"
          />

          <NextLink
            href="/login"
            passHref
          >
            <Button
              color="primary"
              variant="contained"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Sign In
            </Button>
          </NextLink>

          <NextLink
            href="/register"
            passHref
          >
            <Button
              color="primary"
              variant="contained"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Sign Up
            </Button>
          </NextLink>

      </Container>
      </Box>
    </>
  );
};

export default Home;
