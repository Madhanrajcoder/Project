import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '../Common/TextField';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';

export default function Register() {

    const validate=Yup.object({
        'user/admin':Yup.string().max(15,"greater than 4 words").required("Fill the field"),
        username:Yup.string().required("Fill the field"),
        mobilenumber:Yup.string().required("Fill the field"),
        email:Yup.string().email("enter validate email").required("Fill the field"),
        password:Yup.string().min(8,"password must be greater than 8").required("Fill the field"),
        confirmpassword:Yup.string().oneOf([Yup.ref('password'), null],"enter crrt password").required("Fill the field")

          })



  return <Formik
  initialValues={{
      'user/admin':'',
    email:'',
    username:'',
    mobilenumber:'',
    password:'',
    confirmpassword:''
  }}
  validationSchema={validate}
  onSubmit={(value)=>{
      console.log(value)
  }}
  >

<Form>
 <h1>Register</h1> 
  <TextField  name='user/admin' id='user/admin' type='text' placeholder='Enter admin/user'/>
  <TextField  name='email' id='email' type='email' placeholder='Enter email'/>
  <TextField  name='username' id='username' type='text' placeholder='Enter Username'/>
  <TextField  name='mobilenumber' id='mobilenumber' type='text' placeholder='Enter Mobilenumber'/>
  <TextField  name='password' id='password' type='password' placeholder='password'/>
  <TextField  name='confirmpassword' id='confirmpassword' type='password' placeholder='Confirm Password'/>
  <button type='submit'>Submit</button>
  <span>Already a user? <Link to='/login'>Login</Link></span>

</Form>

  </Formik>;
}
