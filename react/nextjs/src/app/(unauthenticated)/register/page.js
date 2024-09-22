'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Card, CardBody, DatePicker, Image, Input } from '@nextui-org/react';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be 8 characters long')
    .required('Required'),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Confirm Password must match Password'),
});



const Register = () =>{ 
  const router = useRouter()

const handleSave= async (values)=>{
  try{
    const {data}  = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`,values)
    toast.success(data?.msg)
    if(data) {
      router.push('/login')
    }
  }catch(err){
    toast.error(err?.response?.data?.msg)
  }

}
  return (
  <div>

    <Formik
      initialValues={{
        fullName: '',
        email: '',
        phoneNumber: null,
        gender: 'Male',
        dateOfBirth: '',
        password:'',
        confirmPassword:''

      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        handleSave(values)
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
          <Input name="fullName"    className={errors.fullName ? ' border border-red-600 rounded-md': null} onChange={handleChange} placeholder="Enter Full Name"/>
          {errors.fullName && touched.fullName ? (
            <div className='text-red-900 text-sm'>{errors.fullName}</div>
          ) : null}
       
          <Input name="email" type="email" onChange={handleChange}  placeholder='enter email'/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}


          <Input name="phoneNumber" onChange={handleChange}  placeholder='enter phoneNumber'/>
          {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
         
          <DatePicker label="Birth date"/>


          <Input name="password" type="password" onChange={handleChange}  placeholder='Enter Password'/>
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          <Input name="confirmPassword" type="password" onChange={handleChange}  placeholder='Confirm Password'/>
          {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}

          <Button className='bg-[#3C5C7D] text-white' type="submit">Register</Button>
        </Form>
       <p> Already have an account? <Link href={"/login"}>Sign In</Link> Instead</p>
        </CardBody>
        </Card>
        </div>
      )}
    </Formik>
  </div>
)};


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