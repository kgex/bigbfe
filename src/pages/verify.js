import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import api from "../utils/api";
import qs from 'qs';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

const Verify = () => {

    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: "",
            otp: 0
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email(
                    'Must be a valid email')
                .max(50)
                .required(
                    'Email is required')
                .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[kgkite | kgcas]+(?:\.[ac.in | com]+)*$/, 'Use your college email only!'),

            otp: Yup
                .number()
                .min(10000)
                .max(999999)
                .required(
                    'OTP is required'),
        }),

        onSubmit: values => {
            console.log(JSON.stringify(values))
            const data = {
                "email": values.email,
                "otp": parseInt(values.otp)
            }
            console.log(data);
            api.post(
                `verify`, data)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    router.push('/login');

                }).catch((error) => {
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
                                Check your email for OTP
                            </Typography>
                        </Box>

                        <TextField
                            error={Boolean(formik.touched.email && formik.errors.email)}
                            fullWidth
                            helperText={formik.touched.email && formik.errors.email}
                            label="Email Address"
                            margin="normal"
                            name="email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="email"
                            value={formik.values.email}
                            variant="outlined"
                        />

                        <TextField
                            error={Boolean(formik.touched.otp && formik.errors.otp)}
                            fullWidth
                            helperText={formik.touched.otp && formik.errors.otp}
                            label="OTP"
                            margin="normal"
                            name="otp"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="otp"
                            value={formik.values.otp}
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
                                Verify
                            </LoadingButton>
                        </Box>

                    </form>
                </Container>
            </Box>
        </>
    );
};

export default Verify;