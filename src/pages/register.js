import React, { useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

import qs from "qs";
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
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import api from "../utils/api";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ShowHidePassword from "src/components/showHidePassword";
import LoadingButton from "@mui/lab/LoadingButton";
import { cyan } from "@mui/material/colors";
import CustomAlert from "src/components/custom-alert";

const Register = () => {
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 8,
      position: "relative",
      backgroundColor: "#F9FAFC",
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "16.5px 14px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 8,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }));

  const clgdata = [
    {
      clg_id: "KITE",
      s_name: "kg",
      clg_name: "KITE",
      Department: [
        {
          dep_id: "101",
          d_name: "BTech IT",
          clg_id: "1",
        },
        {
          dep_id: "102",
          d_name: "BE CSE",
          clg_id: "1",
        },
        {
          dep_id: "103",
          d_name: "BE ECE",
          clg_id: "1",
        },
        {
          dep_id: "104",
          d_name: "BE Mechanical Engineering",
          clg_id: "1",
        },
        {
          dep_id: "105",
          d_name: "BTech CSBS",
          clg_id: "1",
        },
        {
          dep_id: "106",
          d_name: "BTech AI&DS",
          clg_id: "1",
        },
        {
          dep_id: "401",
          d_name: "MBA",
          clg_id: "1",
        },
        {
          dep_id: "402",
          d_name: "ME Applied Electronics",
          clg_id: "1",
        },
        {
          dep_id: "403",
          d_name: "ME Computer Science and Engineering",
          clg_id: "1",
        },
      ],
    },
    {
      clg_id: "KGCAS",
      s_name: "cas",
      clg_name: "KGCAS",
      Department: [
        {
          dep_id: "201",
          d_name: "BA Tamil",
          clg_id: "2",
        },
        {
          dep_id: "202",
          d_name: "BA English",
          clg_id: "2",
        },
        {
          dep_id: "203",
          d_name: "Visual Communication",
          clg_id: "2",
        },
        {
          dep_id: "204",
          d_name: "Accounting And Finance",
          clg_id: "2",
        },
        {
          dep_id: "205",
          d_name: "Commerce CA",
          clg_id: "2",
        },
        {
          dep_id: "206",
          d_name: "Commerce IT",
          clg_id: "2",
        },
        {
          dep_id: "207",
          d_name: "Commerce PA",
          clg_id: "2",
        },
        {
          dep_id: "208",
          d_name: "Commerce IT",
          clg_id: "2",
        },
        {
          dep_id: "209",
          d_name: "Bsc Mathematics",
          clg_id: "2",
        },
        {
          dep_id: "210",
          d_name: "Management",
          clg_id: "2",
        },
        {
          dep_id: "211",
          d_name: "Bsc Computer Science",
          clg_id: "2",
        },
        {
          dep_id: "212",
          d_name: "Bcom Computer Application",
          clg_id: "2",
        },
        {
          dep_id: "213",
          d_name: "Bsc Computer Technology",
          clg_id: "2",
        },
        {
          dep_id: "214",
          d_name: "Bio-Technology",
          clg_id: "2",
        },
        {
          dep_id: "301",
          d_name: "Msc Math",
          clg_id: "2",
        },
        {
          dep_id: "302",
          d_name: "Msc Computer Science",
          clg_id: "2",
        },
        {
          dep_id: "303",
          d_name: "Msc Software System",
          clg_id: "2",
        },
        {
          dep_id: "304",
          d_name: "BCA ",
          clg_id: "2",
        },
        {
          dep_id: "305",
          d_name: "BSA ",
          clg_id: "2",
        },
        {
          dep_id: "306",
          d_name: "Commerce",
          clg_id: "2",
        },
      ],
    },
  ];

  const [showPassword, setShowPassword] = useState(false);
  const [clgid, setClgid] = useState("");
  const [dept, setDept] = useState([]);

  const [deptid, setDeptid] = useState("");
  const [deptName, setDeptName] = useState("");
  const [alertData, setAlertData] = useState({ open: false, message: "" });

  const handleCname = (e) => {
    const getclgID = e.target.value;
    const getDepatData = clgdata.find((clg) => clg.clg_id === getclgID).Department;
    setDept(getDepatData);
    setClgid(getclgID);
  };

  const handleDname = (e) => {
    const deptid = e.target.value;
    const getDeptName = clgdata
      .find((clg) => clg.clg_id === clgid)
      .Department.find((dept) => dept.dep_id === deptid).d_name;
    setDeptid(deptid);
  };

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      full_name: "",
      phone_no: "",
      register_num: "",
      college: "",
      dept: "",
      join_year: "",
      grad_year: "",
      password: "",
      category: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(50)
        .required("Email is required")
        .matches(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[kgkite | kgcas]+(?:\.[ac.in | com]+)*$/,
          "Use your college email only!"
        ),

      full_name: Yup.string().max(50).required("First name is required"),
      phone_no: Yup.string().max(50).required("Mobile number is required"),
      register_num: Yup.string().max(15).required("Register number is required"),
      college: Yup.string().max(40).required("College is required"),
      dept: Yup.string().required("Department is required"),
      gender: Yup.string().required("Gender is required"),
      stay: Yup.string().required("Gender is required"),
      category: Yup.string().required("Category is required"),
      join_year: Yup.string().required("Join year is required"),
      grad_year: Yup.string().required("Pass out year is required"),
      password: Yup.string()
        .max(16)
        .required("Password is required")
        .matches(
          /^(?=.*[A-Za-z0-9])(?=.*\d)(?=.*[-_+=,.@$!%*#?&])[A-Za-z0-9\d-_+=,.@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    }),

    onSubmit: (values) => {
      console.log(
        JSON.stringify({
          ...values,
          join_year: parseInt(formik.values.join_year),
          grad_year: parseInt(formik.values.grad_year),
        })
      );

      api
        .post("/users/", {
          ...values,
          join_year: parseInt(formik.values.join_year),
          grad_year: parseInt(formik.values.grad_year),
        })
        .then((res) => {
          router.push("/verify");
        })
        .catch((error) => {
          formik.isSubmitting = false;
          if (error.response) {
            setAlertData({ open: true, message: error.response.data.detail });
          } else {
            setAlertData({
              open: true,
              message: "Something went wrong. Contact Admin or Try Later",
            });
          }
        });
    },
  });

  return (
    <>
      <Head>
        <title>Register | KGXperience</title>
      </Head>

      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "70%",
        }}
      >
        <Container maxWidth="sm">
          <NextLink href="/" passHref>
            <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
              Dashboard
            </Button>
          </NextLink>

          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            </Box>

            <Grid container spacing={1} justifyContent="center" alignItems={"center"}>
              <Grid item xs={6}>
                <TextField
                  error={Boolean(formik.touched.full_name && formik.errors.full_name)}
                  fullWidth
                  helperText={formik.touched.full_name && formik.errors.full_name}
                  label="Full Name"
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
                  error={Boolean(formik.touched.phone_no && formik.errors.phone_no)}
                  fullWidth
                  helperText={formik.touched.phone_no && formik.errors.phone_no}
                  label="Mobile No."
                  margin="normal"
                  name="phone_no"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phone_no}
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
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  {...formik.getFieldProps("password")}
                  sx={{
                    // marginBottom: 2,
                    marginTop: 1,
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
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  error={Boolean(formik.touched.college && formik.errors.college)}
                  // helperText={formik.touched.college && formik.errors.college}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.college}
                >
                  <InputLabel variant="standard">College</InputLabel>

                  <NativeSelect
                    label="College"
                    // margin="normal"
                    name="college"
                    input={<BootstrapInput />}
                    onBlur={formik.handleBlur}
                    variant="outlined"
                    onChange={(e) => handleCname(e)}
                    value={formik.values.college}
                  >
                    <option>Select</option>
                    {clgdata.map((getClg, index) => (
                      <option value={getClg.clg_name} key={index}>
                        {getClg.clg_name}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  error={Boolean(formik.touched.dept && formik.errors.dept)}
                  fullWidth
                  // helperText={formik.touched.dept && formik.errors.dept}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.dept}
                >
                  <InputLabel variant="standard">Department</InputLabel>

                  <NativeSelect
                    label="Department"
                    // margin="normal"
                    name="dept"
                    value={formik.values.dept}
                    input={<BootstrapInput />}
                    onChange={(e) => handleDname(e)}
                    variant="outlined"
                  >
                    <option>Select</option>
                    {dept.map((getDept, index) => (
                      <option value={getDept.dep_id} key={index}>
                        {getDept.d_name}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  error={Boolean(formik.touched.gender && formik.errors.gender)}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                >
                  <InputLabel variant="standard">Gender</InputLabel>

                  <NativeSelect
                    label="Gender"
                    // margin="normal"
                    name="gender"
                    input={<BootstrapInput />}
                    onBlur={formik.handleBlur}
                    variant="outlined"
                    value={formik.values.gender}
                  >
                    <option>Select</option>
                    {["Male", "Female"].map((gen) => (
                      <option value={gen} key={gen}>
                        {gen}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  error={Boolean(formik.touched.stay && formik.errors.stay)}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.stay}
                >
                  <InputLabel variant="standard">Stay</InputLabel>

                  <NativeSelect
                    label="Stay"
                    name="stay"
                    input={<BootstrapInput />}
                    onBlur={formik.handleBlur}
                    variant="outlined"
                    value={formik.values.stay}
                  >
                    <option>Select </option>
                    {["Home", "Outside Hostel", "College Hostel"].map((sty) => (
                      <option value={sty} key={sty}>
                        {sty}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  error={Boolean(formik.touched.category && formik.errors.category)}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.category}
                >
                  <InputLabel variant="standard">Category</InputLabel>

                  <NativeSelect
                    label="Category"
                    name="category"
                    input={<BootstrapInput />}
                    onBlur={formik.handleBlur}
                    variant="outlined"
                    value={formik.values.category}
                  >
                    <option>Select</option>
                    {["Chief", "Pro", "Rookie"].map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  error={Boolean(formik.touched.join_year && formik.errors.join_year)}
                  fullWidth
                  helperText={formik.touched.join_year && formik.errors.join_year}
                  label="Join year"
                  margin="normal"
                  name="join_year"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.join_year}
                  variant="outlined"
                  type={"number"}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  error={Boolean(formik.touched.grad_year && formik.errors.grad_year)}
                  fullWidth
                  type={"number"}
                  helperText={formik.touched.grad_year && formik.errors.grad_year}
                  margin="normal"
                  label="Pass year"
                  name="grad_year"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  variant="outlined"
                  value={formik.values.grad_year}
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            ></Box>

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
            <Typography color="textSecondary" variant="body2">
              Have an account?
              <NextLink href="/login" passHref>
                <Link variant="subtitle2" underline="hover">
                  Sign In
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
      <CustomAlert data={alertData} />
    </>
  );
};

export default Register;
