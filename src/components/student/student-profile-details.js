import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Stack,
  Typography,
  
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useFormik } from 'formik';
import * as Yup from 'yup';


// const states = [
//   {
//     value: 'alabama',
//     label: 'Alabama'
//   },
//   {
//     value: 'new-york',
//     label: 'New York'
//   },
//   {
//     value: 'san-francisco',
//     label: 'San Francisco'
//   }
// ];

const department = [
  {
    value: 'COMPUTER SCIENCE ENGINEERING',
    label: 'COMPUTER SCIENCE ENGINEERING'
  },
  {
    value: 'ELECTRONICS AND COMMUNICATION ENGINEERING',
    label: 'ELECTRONICS AND COMMUNICATION ENGINEERING'
  },
  {
    value: 'INFORMATION TECHNOLOGY',
    label: 'INFORMATION TECHNOLOGY'
  }
];

const college = [
  {
    value: 'KGISL INSITUTE OF TECHNOLOGY',
    label: 'KGISL INSITUTE OF TECHNOLOGY'
  },
  {
    value: 'KG COLLEGE OF ARTS AND SCIENCE',
    label: 'KG COLLEGE OF ARTS AND SCIENCE'
  },
];
const domain = [
  {
    value: 'Full Stack',
    label: 'Full Stack'
  },
  {
    value: 'AI/ML',
    label: 'AL/ML'
  },
  {
    value: 'IOT',
    label: 'IOT'
  },
  {
    value: 'Mobile App Development',
    label: 'Mobile App Development'
  },
];


export const StudentProfileDetails = (props) => {

  const [startDate, setStartDate] = useState("");
  const [endDate, setendDate] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: props.name,
      email: '',
      phone: '',
      dob : "",
      college: 'Alabama',
      department: 'Alabama',
      startYear : startDate,
      endYear : endDate,
      domain : ""
      
    },
    validationSchema: Yup.object({
      firstName: Yup
        .string()
        .max(255)
        .required(
          'title is required'),
      email: Yup
        .string()
        .max(255)
        .required(
          'Start Time is required'),
          phone: Yup
        .string()
        .max(255)
        .required(
          'Stop Time is required'),
      dob: Yup
          .string()
          .max(255)
          .required(
            'Stop Time is required'),
        startYear: Yup
        .string()
        .max(500)
        .required(
          'description is required'),
          startYear: Yup
          .string()
          .max(500)
          .required(
            'description is required'),
          domain: Yup
          .string()
          .max(500)
          .required(
            'description is required'),
              
      }),  


    onSubmit: values => {

    }
  });


  const [values, setValues] = useState({
    firstName: '',
    email: 'demo@devias.io',
    phone: '',
    dob : "",
    college: 'Alaba ma',
    department: 'Alabama',
    country: '',
    startYear : startDate,
    endYear : endDate,
    domain : ""
  });

  

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                fullWidth
                helperText={formik.touched.firstName && formik.errors.firstName}
                label="Full name"
                name="firstName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
               error={Boolean(formik.touched.email && formik.errors.email)}
               fullWidth
               helperText={formik.touched.email && formik.errors.email}
                label="Email Address"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="email"
                value={formik.values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(formik.touched.phone && formik.errors.phone)}
                fullWidth
                helperText={formik.touched.phone && formik.errors.phone}
                label="Phone Number"
                name="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="number"
                value={formik.values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
             
             <TextField
                error={Boolean(formik.touched.dob && formik.errors.dob)}
                fullWidth
                helperText={formik.touched.dob && formik.errors.dob}
                name="dob"
                label="Day Of Birth"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.dob}
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />

            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                
                label="Select College "
                name="college"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.college}
                variant="outlined"
              >
                {college.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select Department"
                name="department"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.department}
                variant="outlined"
              >
                {department.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Box m={0} width="100%">
                <DatePicker
                  
                  inputFormat="yyyy"
                  views={['year']}
                  label="Start Year"
                  minDate={new Date('2012')}
                  maxDate={new Date('2023')}
                  value={startDate}
                  onChange={setStartDate}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
                />
              </Box>
            </LocalizationProvider>
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Box m={0} width="100%">
                <DatePicker
                  
                  inputFormat="yyyy"
                  views={['year']}
                  label="End Year"
                  minDate={new Date('2012')}
                  maxDate={new Date('2023')}
                  value={endDate}
                  onChange={setendDate}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
                />
              </Box>
            </LocalizationProvider>
            </Grid>
            
            <Grid
              item
              md={6}
              xs={12}
            >
                <TextField
                fullWidth
                label="Select Domain"
                name="domain"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.domain}
                variant="outlined"
              >
                {domain.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
             
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
