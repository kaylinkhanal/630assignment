'use client'
import React, { useEffect, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Card, CardBody, DatePicker, Image, Input } from '@nextui-org/react';
import Link from 'next/link';
import axios from 'axios';
import NavBar from '@/app/navbar';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

const Register = () => {
  const router = useRouter()
  const inputRef = useRef(null)
  const {userPageId} = useSelector(state=>state.user)

  const handleLogin = async(values)=>{
    try{
      const {data}=await axios.post(process.env.NEXT_PUBLIC_API_URL+'/login',values )
      if(data) router.push('/dashboard')
    }catch(err){
      toast.error(err?.response?.data?.msg)
    }
  }




  useEffect(()=>{
    if(userPageId == 'input') inputRef?.current?.scrollIntoView()
  },[userPageId])

  return(
  <div>
{/* <NavBar/> */}
    <Formik
      initialValues={{
        email: '',
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
          <Input name="email"   className={errors.email ? ' border border-red-600 rounded-md': null} onChange={handleChange} placeholder="Enter User Name"/>
          {errors.email && touched.email ? (
            <div className='text-red-900 text-sm'>{errors.email}</div>
          ) : null}
          <Input name="password"  type="password" onChange={handleChange}  placeholder='Enter Password'/>
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          <Button className='bg-[#3C5C7D] text-white' type="submit">Login</Button>
        </Form>
       <p> Already have an account? <Link href={"/register"}>Sign Up</Link> Instead</p>
        </CardBody>
        </Card>
        </div>
      )}
    </Formik>
    {/* <div className='h-[100vh]'>
fsdafsad
    </div>
    <input ref={inputRef}  placeholder='hello'/> */}
  </div>
)
}


export default Register
