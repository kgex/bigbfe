import React, { useState } from "react"
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
import { cyan } from "@mui/material/colors";

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


  const clgdata = [
    {
      clg_id: '1',
      s_name: 'kg',
      clg_name: 'KiTE',
      Department: [
        {
          dep_id: '101',
          d_name: 'B tech IT',
          clg_id: '1'
        }, {
          dep_id: '102',
          d_name: 'BE CSE',
          clg_id: '1'
        },
        {
          dep_id: '103',
          d_name: 'BE ECE',
          clg_id: '1'
        },
        {
          dep_id: '104',
          d_name: 'BE Mechanical Engineering',
          clg_id: '1'
        },
        {
          dep_id: '105',
          d_name: 'B tech CSBS',
          clg_id: '1'
        },
        {
          dep_id: '106',
          d_name: 'B tech AIDS',
          clg_id: '1'
        }
        ,
        {
          dep_id: '401',
          d_name: 'MBA',
          clg_id: '1'
        }
        ,
        {
          dep_id: '402',
          d_name: 'ME Applied Electronics',
          clg_id: '1'
        },
        {
          dep_id: '403',
          d_name: 'ME Computer Science and Engineering',
          clg_id: '1'
        }
      ]
    },
    {
      clg_id: '2',
      s_name: 'cas',
      clg_name: 'KGCAS',
      Department: [
        {
          dep_id: '201',
          d_name: 'BA Tamil',
          clg_id: '2'
        },
        {
          dep_id: '202',
          d_name: 'BA English',
          clg_id: '2'
        },
        {
          dep_id: '203',
          d_name: 'Visual Communication',
          clg_id: '2'
        },
        {
          dep_id: '204',
          d_name: 'Accounting And Finance',
          clg_id: '2'
        },
        {
          dep_id: '204',
          d_name: 'Commerce',
          clg_id: '2'
        },
        {
          dep_id: '205',
          d_name: 'Commerce CA',
          clg_id: '2'
        },
        {
          dep_id: '206',
          d_name: 'Commerce IT',
          clg_id: '2'
        },
        {
          dep_id: '207',
          d_name: 'Commerce PA',
          clg_id: '2'
        },
        {
          dep_id: '208',
          d_name: 'Commerce IT',
          clg_id: '2'
        },
        {
          dep_id: '209',
          d_name: 'Bsc Mathematics',
          clg_id: '2'
        },
        {
          dep_id: '210',
          d_name: 'Management',
          clg_id: '2'
        },
        {
          dep_id: '211',
          d_name: 'Bsc Computer Science',
          clg_id: '2'
        },
        {
          dep_id: '212',
          d_name: 'Bcom Computer Application',
          clg_id: '2'
        },
        {
          dep_id: '213',
          d_name: 'Bsc Computer Technology',
          clg_id: '2'
        },
        {
          dep_id: '214',
          d_name: 'Bio-Technology',
          clg_id: '2'
        },
        {
          dep_id: '301',
          d_name: 'Msc Math',
          clg_id: '2'
        },
        {
          dep_id: '302',
          d_name: 'Msc Computer Science',
          clg_id: '2'
        },
        {
          dep_id: '303',
          d_name: 'Msc Software System',
          clg_id: '2'
        }
      ]
    }
  ]







  const [showPassword, setShowPassword] = useState(false);
  const [clgid, setClgid] = useState('');
  const [dept, setDept] = useState([]);

  const [deptid, setDeptid] = useState('');
  const [cyear, setCyear] = useState('');

  const handleCname = (e) => {

    const getclgID = e.target.value;
    const getDepatData = clgdata.find(clg => clg.clg_id === getclgID).Department;
    setDept(getDepatData);

    //console.log(getclgID);
  }

  const handleDname = (e) => {
    const deptid = e.target.value;


    if (deptid === '201') {
      alert("Tamil")
    }

    setDeptid(deptid);
  }

  const handleYear = (e) => {
    const cyear = e.target.value;
    console.log(cyear)

    formik.values.clg_join = cyear
    console.log(deptid);
    if (deptid === '201' | deptid === '202' | deptid === '203' | deptid === '204' | deptid === '205' | deptid === '206'
      | deptid === '207' | deptid === '208' | deptid === '209' | deptid === '210' | deptid === '211' | deptid === '212' | deptid === '213' | deptid === '214'
    ) {
      let t = parseInt(cyear);
      t = t + 3;
   
      setCyear(t)
    }
    else if (deptid === '101' | deptid === '102' | deptid === '103' | deptid === '104' | deptid === '105' | deptid === '106') {
      let t = parseInt(cyear);
      t = t + 4;
   
      setCyear(t)
    }
    else if (deptid === '301' | deptid === '302' | deptid === '303' | deptid === '401' | deptid === '402' | deptid === '403') {
      let t = parseInt(cyear);
      t = t + 2;
  
      setCyear(t)
    }else{
      setCyear(t)
    }
    

  }

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


                    variant="outlined"
                    onChange={(e) => handleCname(e)}
                    value={formik.values.college_name}
                  >
                    <option>Select</option>
                    {
                      clgdata.map((getClg, index) => (
                        <option value={getClg.clg_id} key={index}>{getClg.clg_name}</option>
                      ))
                    }


                  </NativeSelect>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl error={Boolean(formik.touched.Depat && formik.errors.Depat)}
                  fullWidth
                  helperText={formik.touched.Depat && formik.errors.Depat}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.Depat}

                >

                  <InputLabel>
                    Department
                  </InputLabel>
                  <NativeSelect


                    label="Department"
                    margin="normal"
                    name="Depat"

                    value={formik.values.Depat}
                    input={<BootstrapInput />}
                    onChange={(e) => handleDname(e)}
                    variant="outlined"

                  >
                    <option>Select</option>
                    {
                      dept.map((getDept, index) => (
                        <option value={getDept.dep_id} key={index}>{getDept.d_name}</option>
                      ))
                    }

                  </NativeSelect>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native" style={{ fontSize: 12 }}


                >
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
                  onChange={(e)=>{handleYear(e)}}
                  value = {formik.values.clg_join}
                  variant="outlined"

                />
                {console.log(formik.values.clg_join)}
              </Grid>
              <Grid item xs={6}>
                <InputLabel style={{ fontSize: 12 }}>
                  College Pass out Year
                </InputLabel>
                <TextField
                  error={Boolean(formik.touched.clg_passout && formik.errors.clg_passout)}
                  fullWidth
                  helperText={formik.touched.clg_passout && formik.errors.clg_passout}
                  margin="normal"
                  label="Pass year"
                  name="clg_passout"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}


                  variant="outlined"
                  disabled
                  value={formik.values.clg_passout = cyear}
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