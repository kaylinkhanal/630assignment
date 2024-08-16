'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Card, CardBody, DatePicker, Image, Input } from '@nextui-org/react';
import Link from 'next/link';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be 8 characters long')
    .required('Required'),
    phoneNumber: Yup.number()
    .min(10, 'Phone Number must be 10 characters long')
    .max(10, 'Phone Number must be 10 characters long'),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Confirm Password must match Password'),
});

const Register = () => (
  <div>

    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
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
          <Input name="firstName"    className={errors.firstName ? ' border border-red-600 rounded-md': null} onChange={handleChange} placeholder="Enter Full Name"/>
          {errors.firstName && touched.firstName ? (
            <div className='text-red-900 text-sm'>{errors.firstName}</div>
          ) : null}
       
          <Input name="email" type="email" onChange={handleChange}  placeholder='enter email'/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <DatePicker label="Birth date"/>


          <Input name="password" type="password" onChange={handleChange}  placeholder='Enter Password'/>
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          <Input name="confirmPassword" type="password" onChange={handleChange}  placeholder='Confirm Password'/>
          {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}

          <Button className='bg-[#3C5C7D] text-white' type="submit">Register</Button>
        </Form>
       <p> Already have an account? <Link href={"/"}>Sign In</Link> Instead</p>
        </CardBody>
        </Card>
        </div>
      )}
    </Formik>
  </div>
);


export default Register



// import { Button, Card, CardBody, DatePicker, Image, Input } from "@nextui-org/react"
// import Link from "next/link"

// const Register = ()=> {
//   return (
    // <div className="flex justify-center items-center">
    // <Card className="flex w-96 p-4 m-12">
    //       <Image
    //   width={300}
    //   alt="NextUI hero Image"
    //   src="logo.png"
    // />
//       <CardBody className="flex gap-2">
//     <Input placeholder="Enter Full Name"/>
//     <Input placeholder="Enter Email"/>
//     <Input placeholder="Enter Phone Number"/>
//     <DatePicker  label="Birth date"  />
//     <Input placeholder="enter password"/>

//     <Input placeholder="Enter Confirm Password"/>

//     <Button className="bg-blue-400 text-white">Register</Button>
//     <p>Already have an account? <Link href="/">Login</Link>  instead</p>
//     </CardBody>
//     </Card>
//     </div>

//   )
// }

// //JSX

// export default Register