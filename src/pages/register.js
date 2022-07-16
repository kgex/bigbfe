import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import qs from 'qs';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import api from '../utils/api';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ShowHidePassword from 'src/components/showHidePassword';
import LoadingButton from '@mui/lab/LoadingButton';

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      full_name: '',
      password: '',
    },
    validationSchema: Yup.object({

      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(50)
        .required('Email is required')
        // .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Must be a valid email'),
        .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[kgkite]+(?:\.[ac.in]+)*$/, 'Use your college email only!'),

      full_name: Yup
        .string()
        .max(50)
        .required('First name is required'),

      password: Yup
        .string()
        .max(16)
        .required('Password is required')
        .matches(
          /^(?=.*[A-Za-z0-9])(?=.*\d)(?=.*[-_+=,.@$!%*#?&])[A-Za-z0-9\d-_+=,.@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    }),

    onSubmit: values => {
      console.log(JSON.stringify({ ...values, role: "student" }))

      api.post(
        `users/`, { ...values, role: "student" })
        .then(res => {
          console.log(res);
          console.log(res.data);
          router.push('/verify');
        })
    }
  });

  return (
    <>
      <Head>
        <title>
          Register | KGXperience
        </title>
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
              Dashboard
            </Button>
          </NextLink>

          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Create a new account
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Use your email to create a new account
              </Typography>
            </Box>

            <TextField
              error={Boolean(formik.touched.full_name && formik.errors.full_name)}
              fullWidth
              helperText={formik.touched.full_name && formik.errors.full_name}
              label="First Name"
              margin="normal"
              name="full_name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.full_name}
              variant="outlined"
            />

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
              fullWidth
              // autoComplete="current-password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              {...formik.getFieldProps('password')}
              sx={{
                // marginBottom: 2,
                marginTop: 2
              }}

              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                      <ShowHidePassword />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
            </Box>

            <Box sx={{ py: 2 }}>
              <LoadingButton

                loading={formik.isSubmitting}
                loadingPosition="center"
                color="primary"
                // disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >

                Sign Up Now

              </LoadingButton>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Have an account?
              {' '}
              <NextLink
                href="/login"
                passHref
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  Sign In
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>


    </>
  );
};

export default Register;