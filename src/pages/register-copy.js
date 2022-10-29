import { useState } from "react"
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import qs from 'qs';
import {
  Box,
  Button,
  styled,
  InputBase,
  Checkbox,
  Container,
  Grid,
  NativeSelect,
  FormHelperText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 8,
      position: 'relative',
      backgroundColor: '#F9FAFC',
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '16.5px 14px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 8,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      full_name: '',
      last_name: '',
      mobile_no: '',
      reg_no: '',
      college_name: '',
      Depat: '',
      clg_join: '',
      clg_passout: '',
      password: '',
    },
    validationSchema: Yup.object({

      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(50)
        .required('Email is required')
        .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[kgkite]+(?:\.[ac.in]+)*$/, 'Use your college email only!'),

      full_name: Yup
        .string()
        .max(50)
        .required('First name is required'),
      last_name: Yup
        .string()
        .max(50)
        .required('Last name is required'),
      mobile_no: Yup
        .string()
        .max(50)
        .required('Mobile number is required'),
      reg_no: Yup
        .string()
        .max(15)
        .required('Register number is required'),
      college_name: Yup
        .string()
        .max(40)
        .required('College is required'),
      Depat: Yup
        .string()
        .required('Department is required'),
      clg_join: Yup
        .string()
        .required('Join year is required'),
      clg_passout: Yup
        .string()
        .max(4)
        .required('Pass out year is required'),
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
          minHeight: '70%'
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
            <Grid
              container
              spacing={1}
              justifyContent="center"
              alignItems={'center'}
            >
              <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={Boolean(formik.touched.last_name && formik.errors.last_name)}
                  fullWidth
                  helperText={formik.touched.last_name && formik.errors.last_name}
                  label="Last Name"
                  margin="normal"
                  name="last_name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.last_name}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={Boolean(formik.touched.mobile_no && formik.errors.mobile_no)}
                  fullWidth
                  helperText={formik.touched.mobile_no && formik.errors.mobile_no}
                  label="Mobile No."
                  margin="normal"
                  name="mobile_no"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}

                  value={formik.values.mobile_no}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={Boolean(formik.touched.reg_no && formik.errors.reg_no)}
                  fullWidth
                  helperText={formik.touched.reg_no && formik.errors.reg_no}
                  label="Register No."
                  margin="normal"
                  name="reg_no"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}

                  value={formik.values.reg_no}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  // autoComplete="current-password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  {...formik.getFieldProps('password')}
                  sx={{
                    // marginBottom: 2,
                    marginTop: 1
                  }}

                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end"
                          onClick={() => setShowPassword((prev) => !prev)}>
                          <ShowHidePassword />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={Boolean(formik.touched.password && formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth
                 error={Boolean(formik.touched.college_name && formik.errors.college_name)}
                
                 helperText={formik.touched.college_name && formik.errors.college_name}
                 onBlur={formik.handleBlur}
                 onChange={formik.handleChange}
                 value={formik.values.college_name}
                >
                  <InputLabel variant="standard" htmlFor="uncontrolled-native"  >
                    College
                  </InputLabel>
                  <NativeSelect
                 
                   
                    label="College"
                    margin="normal"
                    name="college_name"
                   
                    input={<BootstrapInput />}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.college_name}
                    variant="outlined"
                  >
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl  error={Boolean(formik.touched.Depat && formik.errors.Depat)}
                    fullWidth
                    helperText={formik.touched.Depat && formik.errors.Depat}
                    
                   
                    >
                      
                  <InputLabel>
                  Department
                  </InputLabel>
                  <NativeSelect
               
                   
                    label="Department"
                    margin="normal"
                    name="Depat"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.Depat}
                    
                    input={<BootstrapInput />}
                   
                    variant="outlined"
                  >
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native" style={{fontSize: 12}}>
              College Join Year
                  </InputLabel>
                <TextField
                  error={Boolean(formik.touched.clg_join && formik.errors.clg_join)}
                  fullWidth
                  helperText={formik.touched.clg_join && formik.errors.clg_join}
                  label="Join year"
                  margin="normal"
                  name="clg_join"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}

                  value={formik.values.clg_join}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
              <InputLabel style={{fontSize: 12}}>
              College Pass out Year
                  </InputLabel>
                <TextField
                  error={Boolean(formik.touched.clg_passout && formik.errors.clg_passout)}
                  fullWidth
                  helperText={formik.touched.clg_passout && formik.errors.clg_passout}
                  label="Pass year"
                  margin="normal"
                  name="clg_passout"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}

                  value={formik.values.clg_passout}
                  variant="outlined"
                />
              </Grid>
            </Grid>
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
                fullWidth
                color="primary"
                // disabled={formik.isSubmitting}
                
                size="small"
                type="submit"
                variant="contained"
                
              >

                Sign Up 

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