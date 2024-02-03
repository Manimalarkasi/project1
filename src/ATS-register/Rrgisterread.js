import { Table, TableHead, TableRow,TableContainer,Paper, TableCell, TableBody, Button } from '@mui/material'
import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Rrgisterread() {
  const [getapi,setGetapi] = useState([]);
  const API_URL='https://6593d64d1493b01160693df3.mockapi.io/user';
// const navigate = useNavigate()


const get = async()=>{
  const resp = await axios.get(API_URL)
  setGetapi(resp.data)
  // .then((resp)=>{
  //     console.log(resp);
  //     console.log(resp.data);
  //     setGetapi(resp.data) 
  // })
  // .catch((error)=>{
  //   console.error('error will be occur', error);
  // })
}
  useEffect(()=>{
    get()
  },[])

  const updateuser =({id,empid,name,email,password,cpassword})=>{
    localStorage.setItem('id',id)
    localStorage.setItem('empid',empid)
    localStorage.setItem('name',name)
    localStorage.setItem('password',password)
    localStorage.setItem('cpassword',cpassword)
    // navigate('/update')
   }
const deleteitem = async(id) =>{
  try{
    await axios.delete(`${API_URL}/${id}`);
    get();
   }catch(error){
     console.error('error is dedected',error);
   } 
}

  return (
    <div>
      <TableContainer component={Paper}>
         <Table>
          <TableHead>
            <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Employee ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>E-Mail</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Confirm-Password</TableCell>
            <TableCell>Upadate</TableCell>
            <TableCell>Delate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
             {getapi.map((data)=>{
              return(
                <TableRow key={data.id}>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.empid}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.password}</TableCell>
                  <TableCell>{data.cpassword}</TableCell>
                  <TableCell><Button color='success' variant='contained' onClick={()=>updateuser(data)} >Update</Button></TableCell>
                  <TableCell><Button color='error' variant='contained' onClick={()=>deleteitem(data.id)}>Delete</Button></TableCell>
                </TableRow>
              )
             })}
          </TableBody>
         </Table>
      </TableContainer>
    </div>
  )
}

export default Rrgisterread
