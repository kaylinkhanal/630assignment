import axios from 'axios'
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import CategoryForm from './CategoryForm'
import { Image } from '@nextui-org/react'

const Categories = async() => {
    const {data} = await axios.get('https://api.escuelajs.co/api/v1/categories/')
  
  return (
    <div className=''>
        <CategoryForm/>
        <div className='flex gap-4'>
        {data.map((item)=>{
        return <div className='p-4 bg-pink-50 shadow-md text-2xl font-semibold font-mono justify-center content-center'>
                {item.name}
                <Image src={item.image}  width={100 } height={100}  alt="category"/>
                <FaEdit/>
                <FaTrash/>
        </div>
           })}
        </div>
     
    </div>
  )
}

export default Categories