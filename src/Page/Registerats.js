
import React, { useState } from 'react'
import './Registeratscss.css';
import { Form, Formik ,ErrorMessage, Field} from 'formik';
import * as Yup from 'yup'
import { Avatar, Button, Grid, Paper, Stack, TextField ,Typography,Link} from '@mui/material'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'


// const initialvalues= {
//     empid:'',
//     name:'',
//     email:'',
//     password:'',
//     cpassword:'',
//     phoneno:'',
//     mani:"",
//   }
  const API_URL='https://6593d64d1493b01160693df3.mockapi.io/user';
  // const onSubmit= async(values,onSubmitProps) =>{
  //   // e.preventDefault();
  //   console.log(values);
  //   // console.log('submit props', onSubmitProps);
  //         onSubmitProps.setSubmitting(false);
  //         onSubmitProps.resetForm();
  //         try{
  //          const resp= await axios.post(API_URL,values);
  //          console.log(resp.data);
  //         }catch(error){
  //           console.error('error is dedected',error);
  //         }  
  //       //   navigate('/read') 
  // }
  
  // const validationschema = Yup.object({
  //   empid:Yup.mixed().required('Required!'),
  //   name:Yup.string().max(15).uppercase().required('Required!'),
  //   email:Yup.string().email('invalid email format').required('Required!'),
  //   password:Yup.mixed('must be 1 speciai charactor,capital letter & number').required('Required!'),
  //   cpassword:Yup.string().oneOf([Yup.ref("password")],'this password is not match').required('Required!'),
  //   phoneno:Yup.number('is not a number').max(9999999999,'must be 10 numbers!').required('Required!'),
  // })
  // .json()
  // .camelCase()

function Registerats() {
  const navigate = useNavigate()
  const initialvalues= {
    empid:'',
    name:'',
    email:'',
    password:'',
    cpassword:'',
    phoneno:'',
    mani:"",
  }
  const onSubmit= async(values,onSubmitProps,e) =>{
    // e.preventDefault();
    console.log(values);
    // console.log('submit props', onSubmitProps);
          onSubmitProps.setSubmitting(false);
          onSubmitProps.resetForm();
          try{
           const resp= await axios.post(API_URL,values);
           console.log(resp.data);
          }catch(error){
            console.error('error is dedected',error);
          }  
    localStorage.setItem("user",JSON.stringify(values));
    navigate('/')
  }
    const API_URL='https://6593d64d1493b01160693df3.mockapi.io/user';
    
    const validationschema = Yup.object({
      empid:Yup.mixed().required('Required!'),
      name:Yup.string().max(15).uppercase().required('Required!'),
      email:Yup.string().email('invalid email format').required('Required!'),
      password:Yup.mixed('must be 1 speciai charactor,capital letter & number').required('Required!'),
      cpassword:Yup.string().oneOf([Yup.ref("password")],'this password is not match').required('Required!'),
      phoneno:Yup.number('is not a number').max(9999999999,'must be 10 numbers!').required('Required!'),
    })
    .json()
    .camelCase()
  const [input,setInput] = useState({initialvalues})
  return (
    <section>
       
        <div className='container-full'>
        <div className='reg-part2'>
          <img alt='picachu' src='image/ats1.jpg' className='img' width={800}  />
      </div>
      <div className='reg-part1'>
      <Grid >
        <Paper elevation={2} className='paper-regi'>
           <Grid alignContent={'center'}>
            
              <Avatar alt='ben' src='image/atslogo.jpg' style={{ width:60,height:50,marginLeft:210,padding:10}} />
           <h2 style={{fontSize:30,textAlign:'center'}} >ATS</h2>
           <h3 style={{fontSize:30,textAlign:'center'}}> Registration Form</h3>
           </Grid>
           <Formik initialValues={initialvalues} onSubmit={onSubmit} validationSchema={validationschema} validateOnMount >
            {formik=>{
              // console.log('form data:', formik);
              return(
                <Form>
                <Stack spacing={1} direction={'column'}>
               Employee ID:
              <Field as={TextField}  label='emp id' name='empid' type='text' variant='outlined' style={{margin:'10px',padding:'0px',width:300}} autoFocus/>
              <ErrorMessage name='empid'>
               {errormsg => <span style={{color:'red'}}>{errormsg}</span> }
               </ErrorMessage>
              Name:
              <Field as={TextField} label='name'  name='name' type='text' variant='outlined' style={{margin:'10px',padding:'0px',width:300}} 
              // onChange={(e)=>
              //   setInput({...initialvalues,
              //   [e.target.empid]:e.target.value,})} 
              />
              <ErrorMessage name='name'>
               {errormsg => <div style={{color:'red'}}>{errormsg}</div> }
               </ErrorMessage>
              E-Mail:
              <Field as={TextField} label='email'  name='email'  type='email' variant='outlined' style={{margin:'10px',padding:'0px',width:300}} />
              <ErrorMessage name='email'>
               {errormsg => <div style={{color:'red'}}>{errormsg}</div> }
               </ErrorMessage>
              Password:
              <Field as={TextField} label='password' name='password'  type='password' variant='outlined' style={{margin:'10px',padding:'0px',width:300}} />
              <ErrorMessage name='password'>
               {errormsg => <div style={{color:'red'}}>{errormsg}</div> }
               </ErrorMessage>
              Confirm-password:
              <Field as={TextField}  label='c-password'  name='cpassword' type='password' variant='outlined' style={{margin:'10px',padding:'0px',width:300}}  />
              <ErrorMessage name='cpassword'>
               {errormsg => <div style={{color:'red'}}>{errormsg}</div> }
               </ErrorMessage>
               Phone Number:
               <Field as={TextField} label='phoneno'  name='phoneno' type='text' variant='outlined' style={{margin:'10px',padding:'0px',width:300}} />
               <ErrorMessage name='phoneno'>
               {errormsg => <div style={{color:'red'}}>{errormsg}</div> }
               </ErrorMessage>
              <Button variant='contained' color='success' type='submit' disabled={!formik.isValid} >Submit</Button>
              <Typography>
              you already have a account  
              <NavLink to="/" >LOGIN</NavLink>
            </Typography>
              </Stack>
              </Form>
              )
            }}
            
          </Formik>
        </Paper>
      </Grid>
      </div>



      
      </div>
    </section>
  )
}

export default Registerats
