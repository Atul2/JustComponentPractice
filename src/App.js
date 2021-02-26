import React from 'react';
import {AppBar,Button, Container,Input,FormControl, InputLabel,Toolbar, Typography} from '@material-ui/core';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      
    },
  },
}));





function App() {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      Id: '',
      Name: '',
      Location: '',
      Salary: ''
    },
    validationSchema: yup.object({
      Name: yup.string().max(20, 'Name should not exceed 20 characters')
        .required('Please enter employee name'),
      Location:yup.string().required('Please enter employee location')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values));
    }
  })
  return (
    <>
      <AppBar position="sticky">
        <Toolbar >
          <Typography variant="h6" style={{ flexGrow: 1}}>
              Component Practice
          </Typography>
        </Toolbar>
      </AppBar>
      <Container fixed>
        <h3>----------Employee Form-------------</h3>
         <form className={classes.root} onSubmit={formik.handleSubmit}>
          <FormControl>
            <InputLabel htmlFor="ID">Enter ID</InputLabel>
            <Input id="ID" type="text" values={formik.values.Id} onChange={formik.handleChange}/>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="Name">Enter Name</InputLabel>
            <Input id="Name" type="text" values={formik.values.Name} onChange={formik.handleChange} />
            {formik.touched.Name && formik.errors.Name ?
              <span style={{ color: 'red' }}>{ formik.errors.Name}</span>:null}
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="Location">Enter Location</InputLabel>
            <Input id="Location" type="text" values={formik.values.Location} onChange={formik.handleChange} />
            {formik.touched.Location && formik.errors.Location ?
              <span style={{ color: 'red' }}>{ formik.errors.Location}</span>:null}
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="Salary">Enter Salary</InputLabel>
            <Input id="Salary" type="text" values={formik.values.Salary} onChange={formik.handleChange} />
          </FormControl>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
      </Container>
    </>
  );
}

export default App;
