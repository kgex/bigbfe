import Head from 'next/head';
import NextLink from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import qs from 'qs';
import { useEffect, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

export default function EnterEmail(props) {

  const formik = useFormik({
    initialValues: {
      user_email: "",
    },
    validationSchema: Yup.object({

      user_email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(50)
        .required(
          'Email is required')
        .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[kgkite]+(?:\.[ac.in]+)*$/, 'Use your college email only!'),
    }),


    onSubmit: values => {
      console.log(JSON.stringify(values))
      props.verifyEmail(values)
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

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
        <Container maxWidth="sm">
          <NextLink 
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Login
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
              Account recovery
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Enter a valid email
              </Typography>
            </Box>  

            <TextField
              error={Boolean(formik.touched.user_email && formik.errors.user_email)}
              fullWidth
              helperText={formik.touched.user_email && formik.errors.user_email}
              label="Email Address"
              margin="normal"
              name="user_email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.user_email}
              variant="outlined"
            />

            <Box sx={{ py: 2 }}>
              <LoadingButton
                color="primary"
                // disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={formik.isSubmitting}
                loadingPosition="center"
              >
                Get Otp
              </LoadingButton>
            </Box>
           
            <Typography
              color="textSecondary"
              variant="body2"
              align='center'
              sx={{
                paddingTop: .5
              }}
            >
              {"Don't have an account?"}

              <NextLink
                href="/register"
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Sign Up
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    
    
    
    
    </>
  );
}
