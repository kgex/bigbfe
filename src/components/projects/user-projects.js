import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,

} from '@mui/material';
import Stack from '@mui/material/Stack';

import { useFormik } from 'formik';
import * as Yup from 'yup';

export const UserProjects = (props) => {

  const [id, setId] = useState("");
  // const [error, setError] = React.useState(false);
  console.log(id)

  const formik = useFormik({
    initialValues: {
      name: '',
      domain_name: '',
      project_status: '',
      start_time: '',
      stop_time: '',
      description: '',

    },
    validationSchema: Yup.object({
      name: Yup
        .string()
        .max(255)
        .required(
          'Name is required'),
      project_status: Yup
        .string()
        .max(255)
        .required(
          'Project Status is required'),
      start_time: Yup
        .string()
        .max(255)
        .required(
          'Start Time is required'),
      stop_time: Yup
        .string()
        .max(255)
        .required(
          'Stop Time is required'),
      description: Yup
        .string()
        .max(500)
        .required(
          'Description is required'),
    }),


    onSubmit: values => {
      //console.log(JSON.stringify(values))
      console.log(values)
      props.getData(values);

    }
  });

  const domain_name = [
    // {
    //   value: 'select',
    //   label: 'Select Your Domain'
    // },
    {
      value: 'android',
      label: 'Android Development'
    },
    {
      value: 'ai',
      label: 'Artificial Intelligence'
    },
    {
      value: 'webdevelopment',
      label: 'Web Development'
    },
    {
      value: 'iot',
      label: 'IoT'
    }
  ];
  // <form onSubmit={formik.handleSubmit}>
  return (
    <form
      onSubmit={formik.handleSubmit}>

      <Card>
        <CardHeader
          title="Project"
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
                error={Boolean(formik.touched.name && formik.errors.name)}
                fullWidth
                helperText={formik.touched.name && formik.errors.name}
                label="Name"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                variant="outlined"
              />

            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                defaultValue="Select Your Domain"
                error={Boolean(formik.touched.domain_name && formik.errors.domain_name)}
                fullWidth
                helperText={formik.touched.domain_name && formik.errors.domain_name}
                label="Pick your Domain"
                name="domain_name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                select
                SelectProps={{ native: true }}
                value={formik.values.domain_name}
                variant="outlined"
              >
                {domain_name.map((option) => (
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
                error={Boolean(formik.touched.project_status && formik.errors.project_status)}
                fullWidth
                helperText={formik.touched.project_status && formik.errors.project_status}
                label="Project Status"
                name="project_status"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.project_status}
                variant="outlined"
              />

            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <Stack noValidate
                spacing={3}>
                <TextField
                  error={Boolean(formik.touched.start_time && formik.errors.start_time)}
                  fullWidth
                  helperText={formik.touched.start_time && formik.errors.start_time}
                  id="datetime-local"
                  name="start_time"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="datetime-local"
                  label="Start Time"
                  sx={{ width: "100%" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>

            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Stack noValidate
                spacing={3}>
                <TextField
                  error={Boolean(formik.touched.stop_time && formik.errors.stop_time)}
                  fullWidth
                  helperText={formik.touched.stop_time && formik.errors.stop_time}
                  id="datetime-local"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="stop_time"
                  type="datetime-local"
                  label="End Time"
                  sx={{ width: "100%" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>

            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            item
          >
            <Box
              sx={{
                margin: 0,
                marginTop: 3,
                width: '100%',
                maxWidth: '100%',
              }}
            >
              <TextField style={{ width: "100%" }}
                error={Boolean(formik.touched.description && formik.errors.description)}
                fullWidth
                helperText={formik.touched.description && formik.errors.description}
                id="outlined-multiline-static"
                name="description"
                label="Description"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.description}
                multiline
                rows={5}
                variant="outlined"
              />
            </Box>
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
            disabled={formik.isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Save Details
          </Button>
        </Box>
      </Card>
    </form>
  );
};