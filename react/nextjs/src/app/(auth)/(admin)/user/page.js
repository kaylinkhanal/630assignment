'use client'
import axios from 'axios'
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import CategoryForm from './CategoryForm'
import { Image } from '@nextui-org/react'
import CategoriesList from './CategoriesList'

const Categories = () => {
  return (
    <div className=''>
        <CategoryForm/>
        <CategoriesList/>

    </div>
  )
}

export default Categories