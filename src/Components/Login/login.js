
import './login.css'
import { Formik,Form } from 'formik';
import TextField from '../Common/TextField';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';

export default function LogIn(){

    const valid=Yup.object({
        email:Yup.string().email("enter validate email").required("Fill the field"),
        password:Yup.string().min(8,"password must be greater than 8").required("Fill the field")
    })

    return(
    <Formik
    initialValues={{
        email:'',
        password:''
        }}
        validationSchema={valid}
        onSubmit={(value)=>{
            console.log(value)
        }}
        >

        <Form>
            <h2>Login</h2>
            <TextField name='email' id='email' type='email' placeholder='Enter email'/>
            <TextField  name='password' id='password' type='password' placeholder='password'/>
            <button type='submit'>Login</button>
            <span>New User/admin? <Link to='/'>Sign Up</Link></span>
          
        </Form>
    </Formik>
    )
}