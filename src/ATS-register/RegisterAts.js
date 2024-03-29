import { Avatar, Button, Grid, Paper, Stack, TextField } from '@mui/material'
import React from 'react';
import './Registercss.css';
import { Form, Formik ,ErrorMessage, Field} from 'formik';
import * as Yup from 'yup'



const initialvalues= {
  empid:'',
  name:'',
  email:'',
  password:'',
  cpassword:'',
  phoneno:'',
  mani:"",
}

const onSubmit=(values,onSubmitProps) =>{
  // e.preventDefault();
  console.log(values);
  // console.log('submit props', onSubmitProps);
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
}

const validationschema = Yup.object({
  empid:Yup.mixed().required('Required!'),
  name:Yup.string().max(15).uppercase().required('Required!'),
  email:Yup.string().email('invalid email format').required('Required!'),
  password:Yup.mixed('must be 1 speciai charactor,capital letter & number'),
  cpassword:Yup.string().oneOf([Yup.ref("password")],'this password is not match').required('Required!'),
  phoneno:Yup.number('is not a number').max(9999999999,'must be 10 numbers!')
})
.json()
.camelCase()


function RegisterAts() {
  return (
    <div>
      <Grid className='container' >
        <Paper elevation={24} className='paper-reg'>
           <Grid alignContent={'center'}>
            <Paper style={{marginLeft:'180px',width:100,height:70,backgroundColor:'red'}} >
              <Avatar alt='ben' src='image/4.jpg' style={{ width:60,height:50,margin:10,padding:10}} />
            </Paper>
           <h3 style={{fontSize:30,textAlign:'center'}}> Registration Form</h3>
           </Grid>
           <Formik initialValues={initialvalues} onSubmit={onSubmit} validationSchema={validationschema} validateOnMount >
            {formik=>{
              // console.log('form data:', formik);
              return(
                <Form>
                <Stack spacing={2} direction={'column'}>
               Employee ID:
              <Field as={TextField}  label='emp id' name='empid' type='text' variant='outlined' style={{margin:'10px',padding:'5px',width:300}} autoFocus/>
              <ErrorMessage name='empid'>
               {errormsg => <div style={{color:'red'}}>{errormsg}</div> }
               </ErrorMessage>
              Name:
              <Field as={TextField} label='name' name='name' type='text' variant='outlined' style={{margin:'10px',padding:'5px',width:300}} />
              <ErrorMessage name='name'>
               {errormsg => <div style={{color:'red'}}>{errormsg}</div> }
               </ErrorMessage>
              E-Mail:
              <Field as={TextField} label='email' name='email' type='email' variant='outlined' style={{margin:'10px',padding:'5px',width:300}} />
              <ErrorMessage name='email'>
               {errormsg => <div style={{color:'red'}}>{errormsg}</div> }
               </ErrorMessage>
              Password:
              <Field as={TextField} label='password' name='password' type='password' variant='outlined' style={{margin:'10px',padding:'5px',width:300}} />
              <ErrorMessage name='password'>
               {errormsg => <div style={{color:'red'}}>{errormsg}</div> }
               </ErrorMessage>
              Confirm-password:
              <Field as={TextField}  label='c-password' name='cpassword' type='password' variant='outlined' style={{margin:'10px',padding:'5px',width:300}} />
              <ErrorMessage name='cpassword'>
               {errormsg => <div style={{color:'red'}}>{errormsg}</div> }
               </ErrorMessage>
               Phone Number:
               <Field as={TextField} label='phoneno' name='phoneno' type='text' variant='outlined' style={{margin:'10px',padding:'5px',width:300}}  />
               <ErrorMessage name='phoneno'>
               {errormsg => <div style={{color:'red'}}>{errormsg}</div> }
               </ErrorMessage>
              <Button variant='contained' color='success' type='submit' disabled={!formik.isValid}>Submit</Button>
              </Stack>
              </Form>
              )
            }}
            
          </Formik>
        </Paper>
      </Grid>
    </div>
  )
}

export default RegisterAts
