import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import api from "../utils/api";
import qs from 'qs';
import { useEffect, useState } from 'react';
import ShowHidePassword from 'src/components/showHidePassword';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';



function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return jsonPayload;
  };



const Verify = () => {

   const [showPassword, setShowPassword] = useState(false);

  const [open, setOpen] = useState(false)
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token != null) {
      router.push('/dashboard');
    }
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({

      username: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(50)
        .required(
          'Email is required')
        .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[kgkite | kgcas]+(?:\.[ac.in | com]+)*$/, 'Use your college email only!'),

      otp: Yup
        .string()
        .max(16)
        .required(
          'OTP is required'),
    }),


    onSubmit: values => {
      console.log(JSON.stringify(values))
      api.post(
        `token`, qs.stringify(values))
        .then(res => {
          console.log(res);
          console.log(res.data);
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem("user", parseJwt(res.data.access_token));
          router.push('/dashboard');

        }).catch((error) => {
          setOpen(true)
          console.log("dasdasdasdasdasdas", error)
          console.log("Hellooooo, Im  the  erooorrrr", open)
          formik.resetForm();
        }

        )

    }
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
                            href="/register"
                            passHref
                        >
                            <Button
                                component="a"
                                startIcon={<ArrowBackIcon fontSize="small" />}
                            >
                                Signup
                            </Button>
                        </NextLink>
                        <form onSubmit={formik.handleSubmit}>
                            <Box sx={{ my: 3 }}>
                                <Typography
                                    color="textPrimary"
                                    variant="h4"
                                >
                                    Verification
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Verify your account
                                </Typography>
                            </Box>

                            <TextField
                                error={Boolean(formik.touched.username && formik.errors.username)}
                                fullWidth
                                helperText={formik.touched.username && formik.errors.username}
                                label="Email Address"
                                margin="normal"
                                name="username"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="email"
                                value={formik.values.username}
                                variant="outlined"
                            />

                            <TextField
                                fullWidth
                                type={'text'}
                                label="OTP No."
                                {...formik.getFieldProps('otp')}
                                sx={{
                                    // marginBottom: 2,
                                    marginTop: 2
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton edge="end"
                                                onClick={() => setShowPassword((prev) => !prev)}>
                                               
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
                                    Verify 
                                </LoadingButton>
                            </Box>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Authentication Failed!"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        ⚠ Incorrect OTP.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    {/* <Button onClick={handleClose}>Disagree</Button> */}
                                    <Button onClick={handleClose}
                                        autoFocus>
                                        OK
                                    </Button>
                                </DialogActions>
                            </Dialog>

                            

                            

                        </form>
                    </Container>
                </Box>
            </>
            );
};

 export default Verify;