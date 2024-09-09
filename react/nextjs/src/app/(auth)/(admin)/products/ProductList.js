'use client'
import Card from '@/components/card/page'
import CustomToast from '@/components/customToast/page'
import { Image } from '@nextui-org/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'


const ProductList = () => {
    const [product, setProduct] = useState([])
    const fetchData = async()=> {
        const {data} = await axios.get('https://api.escuelajs.co/api/v1/products/')
        setProduct(data)
    }
    const handleDelete =async(item)=> {
      const {data}= await axios.delete('https://api.escuelajs.co/api/v1/products/'+item.id)
      fetchData()
      if(data) toast.custom((t) => (
      <CustomToast t={t} actionImage={item.image} actionTitle="Deleted Categories successfully" actionName={item.name}/>
      ))
    } 

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
    <div className='flex gap-4'>
    {product.map((item)=>{
    return <Card item={item} handleDelete={handleDelete}/>
       })}
    </div>
    </div>
  )
}

export default ProductList