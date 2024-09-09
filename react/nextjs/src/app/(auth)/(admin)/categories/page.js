'use client'
import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import CategoryForm from './CategoryForm'
import CategoriesList from './CategoriesList'
import CustomToast from '@/components/customToast/page'
import { Image } from '@nextui-org/react'
import axios from 'axios'
import toast from 'react-hot-toast'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const fetchData = async()=> {
        const {data} = await axios.get(process.env.NEXT_PUBLIC_API_URL+'/categories/')
        setCategories(data)
    }
    const handleDelete =async(item)=> {
      const {data}= await axios.delete(process.env.NEXT_PUBLIC_API_URL + '/categories/'+item.id)
      fetchData()
      if(data) toast.custom((t) => (
      <CustomToast t={t} actionImage={item.image} actionTitle="Deleted Categories successfully" actionName={item.name}/>
      ))
    } 
    const handleSubmit = async(values, id)=>{
        if(id) {
            const {data}= await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`,values)
            if(data) {
                toast.success(`${values.name} updated successfully`)
                fetchData()
            }
        }else{
            const {data}= await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories`,values)
            if(data) {
                toast.success(`${values.name} added successfully`)
                fetchData()
            }
        }
      
      }
      
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className=''>
        <CategoryForm type="Add" handleSubmit={handleSubmit}/>
        <CategoriesList handleDelete={handleDelete} categories={categories}/>
    </div>
  )
}

export default Categories