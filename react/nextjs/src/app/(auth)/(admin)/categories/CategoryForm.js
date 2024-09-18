'use client'
import React, { useState } from "react";
import {Modal,Button, Card, CardBody, DatePicker, Image, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input} from "@nextui-org/react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import axios from "axios";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  image: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
});

const FormInput = (props) => (
  <div>

    <Formik
      initialValues={props.item ? props.item : {name: '',image:''}}
      enableReinitialize={true}
      validationSchema={FormSchema}
      onSubmit={values => {
        props.handleSubmit(values, props?.item?.id)
      }}
    >
      {({ errors, touched, handleChange,values }) => (
            <div className="flex justify-center items-center">
            <Card className="flex p-4">
            <CardBody className="flex gap-2">
        <Form className='flex flex-col '>
          <Input name="name"  value={values.name}   className={errors.name ? ' border border-red-600 rounded-md': null} onChange={handleChange} placeholder="Enter Full Name"/>
          {errors.name && touched.name ? (
            <div className='text-red-900 text-sm'>{errors.name}</div>
          ) : null}
       
          <Input name="image" value={values.image}  onChange={handleChange}  placeholder='enter image'/>
          {errors.image && touched.image ? <div>{errors.image}</div> : null}
     
        <Button className='bg-[#3C5C7D] text-white' type="submit">Save</Button>
        </Form>
        </CardBody>
        </Card>
        </div>
      )}
    </Formik>
  </div>
);




export default function CategoryForm(props) {

  debugger;
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      <Button onPress={onOpen}>{props.type == 'Edit' ? <FaEdit/> : "Add Category"} </Button>
      <Modal className="h-[50%]" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{props.type} Categories</ModalHeader>
              <ModalBody>
                <FormInput item={props.item} handleSubmit={props.handleSubmit}/>
              </ModalBody>
            </>
          )}
        </ModalContent>
          
      </Modal>
    </>
  );
}
