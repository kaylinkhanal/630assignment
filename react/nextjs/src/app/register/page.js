'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Card, CardBody, Image, Input } from '@nextui-org/react';

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
});

const Register = () => (
  <div>
    <h1>Signup</h1>
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
        <Form>
        <Image
          width={300}
          alt="NextUI hero Image"
          src="logo.png"
        />
          <Input name="firstName"  onChange={handleChange} placeholder="Enter Full Name"/>
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
       
          <Input name="email" type="email" onChange={handleChange}  placeholder='enter email'/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
        
          <button type="submit">Submit</button>
        </Form>
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