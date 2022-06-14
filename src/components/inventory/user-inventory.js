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

export const UserInventory = (props) => {

  const [id, setId] = useState("");
  console.log(id)

    const formik = useFormik({
        initialValues: {
          item_name: '',
          category: '',
          description: '',
          
        },
        validationSchema: Yup.object({
            title: Yup
            .string()
            .max(255)
            .required(
              'title is required'),
            start_time: Yup
            .string()
            .max(255)
            .required(
              'Start Time is required'),
            purchase_date: Yup
            .string()
            .max(255)
            .required(
              'Stop Time is required'),
            description: Yup
            .string()
            .max(500)
            .required(
              'description is required'),
          }),  


        onSubmit: values => {
          //console.log(JSON.stringify(values))
          console.log(values)
          props.getData(values);
          
        }
      });
    // <form onSubmit={formik.handleSubmit}>
    return (
      <form
        onSubmit={formik.handleSubmit}>
          
        <Card>
          <CardHeader
            title="Inventory Details"
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
                        error={Boolean(formik.touched.item_name && formik.errors.item_name)}
                        fullWidth
                        helperText={formik.touched.item_name && formik.errors.item_name}
                label="Item Name"
                name="item_name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.item_name}
                variant="outlined"  
              
              />
            

            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(formik.touched.category && formik.errors.category)}
                fullWidth
                helperText={formik.touched.category && formik.errors.category}
                label="Category"
                name="category"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.category}
                variant="outlined"
              />
               
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
               <TextField               
                error={Boolean(formik.touched.item_name && formik.errors.department)}
                fullWidth
                helperText={formik.touched.item_name && formik.errors.department}
                label="Department"
                name="department"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.department}
                variant="outlined"  
              >
              </TextField>

            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(formik.touched.college && formik.errors.college)}
                fullWidth
                helperText={formik.touched.college && formik.errors.college}
                label="College"
                name="college"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.college}
                variant="outlined"
              />
               
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
                <TextField
                  error={Boolean(formik.touched.purchase_date && formik.errors.purchase_date)}
                  fullWidth
                  helperText={formik.touched.purchase_date && formik.errors.purchase_date}
                  id="datetime-local"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="purchase_date"
                  type="datetime-local"
                  label="Purchase Date"
                  sx={{ width: "100%" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(formik.touched.item_condition && formik.errors.item_condition)}
                fullWidth
                helperText={formik.touched.item_condition && formik.errors.item_condition}
                label="Item Condition"
                name="item_condition"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.item_condition}
                variant="outlined"
              />
               
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
               <TextField               
                error={Boolean(formik.touched.purchase_price && formik.errors.purchase_price)}
                fullWidth
                helperText={formik.touched.purchase_price && formik.errors.purchase_price}
                label="Purchase Price"
                name="purchase_price"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.purchase_price}
                variant="outlined"  
              >
              </TextField>

            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                error={Boolean(formik.touched.quantity && formik.errors.quantity)}
                fullWidth
                helperText={formik.touched.quantity && formik.errors.quantity}
                label="Quantity"
                name="quantity"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.quantity}
                variant="outlined"
              />
               
            </Grid>


           

            <Grid
              item
              md={6}
              xs={12}
            >
              Image
               <TextField               
                error={Boolean(formik.touched.purchase_price && formik.errors.purchase_price)}
                fullWidth
                type="file"
                helperText={formik.touched.purchase_price && formik.errors.purchase_price}
                name="purchase_price"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.purchase_price}
                variant="outlined"  
              >
              </TextField>

            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              Thumbnail
              <TextField
                error={Boolean(formik.touched.quantity && formik.errors.quantity)}
                fullWidth
                helperText={formik.touched.quantity && formik.errors.quantity}
                name="quantity"
                type="file"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.quantity}
                variant="outlined"
              />
               
            </Grid>
            </Grid> 

         

            

            <Grid
                container
                spacing={0}
              item
             
            >
              <Box
                sx={{
                    margin:0,
                    marginTop:3,
                    width: '100%',
                    maxWidth: '100%',
                }}
                >   
                <TextField style={{width:"100%"}}
                        error={Boolean(formik.touched.description && formik.errors.description)}
                        fullWidth
                        helperText={formik.touched.description && formik.errors.description}
                        id="outlined-multiline-static"
                        name="description"
                        label="Description"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.full_name}
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
              Saved  etails
            </Button>
          </Box>
        </Card>
      </form>
    );
  };