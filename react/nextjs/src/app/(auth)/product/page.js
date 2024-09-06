'use client'
import Sidebar from '@/components/sidebar/page'
import { addToWishlist } from '@/redux/reducerSlice/productSlice'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Product = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [productList, setProductList] = useState([])
    const fetchProducts = async()=>{
     const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      setProductList(data)
    }

    useEffect(()=>{
      fetchProducts()
    },[])
    const {name} = useSelector(state=>state.user)
  return (
    <div>
        <Sidebar/>
        {JSON.stringify(productList)}
        {name}
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
    {productList.map((item, index) => (
      <Card shadow="sm"  key={index} >
               <FaHeart  onClick={(e) =>{
          e.stopPropagation()
          
          dispatch(addToWishlist(item))}} className='absolute right-4 top-2 z-40'/>
        <CardBody  onClick={(e)=>{
        router.push('/product/'+item.id)}} className="overflow-visible p-0">
   

          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            height={400}
            alt={item.title}
            className="w-full object-cover h-[140px]"
            src={item.image}
          />

        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{item.title}</b>
          <p className="text-default-500">{item.price}</p>
        </CardFooter>
      </Card>
    ))}
  </div>
    </div>
 
  )
}

export default Product