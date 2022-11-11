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

const Verify = () => {

    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();


    return (
        <>
            <Head>
                <title>
                    Thanks for registering
                </title>

                <Box sx={{ my: 3 }}>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                    >
                        Thanks for registering
                    </Typography>

                </Box>
            </Head>



        </>
    );
};

export default Verify;