import Head from 'next/head';
import NextLink from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import qs from 'qs';
import { useEffect, useState } from 'react';
import ShowHidePassword from 'src/components/showHidePassword';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';

export default function OtpVerify(props) {


  const [showOtp, setShowOtp] = useState(false);


  const formik = useFormik({
    initialValues: {
      otp : "",
    },
    validationSchema: Yup.object({
      otp: Yup
        .string()
        .max(16)
        .required(
          'Otp is required'),

    }),
    onSubmit: (values) => {
      props.otpData(values)
    },
  });

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
              
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                We have send otp to your email
              </Typography>
            </Box> 

            
            <TextField
              fullWidth
              label="OTP"
              type={showOtp ? 'text' : 'otp'}
              {...formik.getFieldProps('otp')}
              sx={{
                // marginBottom: 2,
                marginTop: 2
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end"
                      onClick={() => setShowOtp((prev) => !prev)}>
                      <ShowHidePassword />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(formik.touched.otp && formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
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
                Confirm
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
