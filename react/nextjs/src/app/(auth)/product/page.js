'use client'
import Sidebar from '@/components/sidebar/page'
import { addToWishlist } from '@/redux/reducerSlice/productSlice'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Product = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const productList = [
        {id: 11, productName:'hawkins cooker', price:3000 , productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXn4PnZoaR9kk1ZU2JpJTwDexlUI-sbdxFHw&s'},
        {id: 15, productName:'prestige cooker', price:2000, productImage: 'https://shop.ttkprestige.com/media/catalog/product/1/0/10038-P-IMG1.jpg?optimize=high&fit=bounds&height=450&width=450'},
        {id: 31, productName:'baltra kettle', price:5000, productImage: 'https://www.neostore.com.np/assets/uploads/superfast.jpg'},
    ]
    const {name} = useSelector(state=>state.user)
  return (
    <div>
        <Sidebar/>
        {name}
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
    {productList.map((item, index) => (
      <Card shadow="sm" key={index} isPressable onPress={()=>router.push('/product/'+item.id)}>
        <CardBody className="overflow-visible p-0">
        <FaHeart  onClick={() => dispatch(addToWishlist(item))} className='absolute right-4 top-2 z-40'/>

          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={item.productName}
            className="w-full object-cover h-[140px]"
            src={item.productImage}
          />

        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{item.productName}</b>
          <p className="text-default-500">{item.price}</p>
        </CardFooter>
      </Card>
    ))}
  </div>
    </div>
 
  )
}

export default Product