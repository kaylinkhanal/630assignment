'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Card, CardBody, DatePicker, Image, Input } from '@nextui-org/react';
import Link from 'next/link';
import axios from 'axios';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

const Register = () => {
  const handleLogin = async(values)=>{
   const {data}=await axios.post('https://fakestoreapi.com/auth/login',values )
  }
  return(
  <div>

    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        handleLogin(values)
      }}
    >
      {({ errors, touched, handleChange }) => (
            <div className="flex justify-center items-center">
            <Card className="flex w-96 p-4 m-12">
            <CardBody className="flex gap-2">
        <Form className='flex flex-col gap-4'>
        <h1 className='text-xl font-mono font-bold text-[#3C5C7D]'>Signup</h1>
        <Image
          width={300}
          alt="NextUI hero Image"
          src="logo.png"
        />
          <Input name="username"    className={errors.username ? ' border border-red-600 rounded-md': null} onChange={handleChange} placeholder="Enter User Name"/>
          {errors.username && touched.username ? (
            <div className='text-red-900 text-sm'>{errors.username}</div>
          ) : null}
          <Input name="password" type="password" onChange={handleChange}  placeholder='Enter Password'/>
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          <Button className='bg-[#3C5C7D] text-white' type="submit">Register</Button>
        </Form>
       <p> Already have an account? <Link href={"/"}>Sign In</Link> Instead</p>
        </CardBody>
        </Card>
        </div>
      )}
    </Formik>
  </div>
)
}


export default Register
