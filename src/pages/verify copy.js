import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  LoadingButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import api from '../utils/api';


const Verify = () => {

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      otp: '',
    },

    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(50)
        .required(
          'Email is required'),
      otp: Yup
        .string()
        .max(16)
        .required(
          'Otp is required'),

    }),
    onSubmit: values => {
      getData(values)
    }
  });


  const getData = (values) => {
    //http://bigbbe.herokuapp.com/verify?email=hello%40gmail.com&otp=53
    console.log(qs.stringify(values))
    api.post(
      `verify?${qs.stringify(values)}`, values)
      .then(res => {
        console.log(res);
        console.log(res.data);
        router.push('/dashboard');
      })
  }

  return (
    <>
      <Head>
        <title>
          Verify | KGXperience
        </title>
      </Head>

      <Box
        component="main"
        x={{
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
                Verify your Account
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
              label="Otp"
              margin="normal"
              name="otp"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="otp"
              value={formik.values.otp}
              variant="outlined"
            />

            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
            </Box>

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
              Submit
            </LoadingButton>

            <Typography
              color="textSecondary"
              variant="body2"
            >
              Have an account?
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

export default Verify;