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

export default function NewPassword(props) {


  const [showNewPassword, setShowNewPassword] = useState(false);

  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  
  const [showOtp, setShowOtp] = useState(false);


  const formik = useFormik({
    initialValues: {
      otp : "",
      newPassword: "",
      confirmPassword: "",

    },
    validationSchema: Yup.object({
      otp :
       Yup.string()
       .max(8).
       required('Otp is required'),
       newPassword: Yup
            .string()
            .max(16)
            .required(
              'Password is required'),
            confirmPassword: Yup
            .string()
            .max(16)
            .required(
              'Confirm Password is required'),

    }),
    onSubmit: (values) => {
      if(values.newPassword === values.confirmPassword){
        props.passwordData({otp : values.otp , password : values.newPassword});
      }
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
            
            <TextField
              fullWidth
              type={showNewPassword ? 'text' : 'password'}
              label="New Password"
              {...formik.getFieldProps('newPassword')}
              sx={{
                // marginBottom: 2,
                marginTop: 2
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end"
                      onClick={() => setShowNewPassword((prev) => !prev)}>
                      <ShowHidePassword />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(formik.touched.newPassword && formik.errors.newPassword)}
              helperText={formik.touched.newPassword && formik.errors.newPassword}
            />

              
            <TextField
              fullWidth
              type={showConfirmPassword ? 'text' : 'password'}
              label="Confirm Password"
              {...formik.getFieldProps('confirmPassword')}
              sx={{
                // marginBottom: 2,
                marginTop: 2
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end"
                      onClick={() => setConfirmShowPassword((prev) => !prev)}>
                      <ShowHidePassword />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />


            <Box sx={{ py: 2 }}>
              <LoadingButton
                color="primary"
                disabled={formik.isSubmitting}
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
