'use client'
import Card from '@/components/card/page'

import React, { useEffect, useState } from 'react'

const CategoriesList = (props) => {

  return (
    <div>
    <div className='flex gap-4'>
    {props.categories.map((item)=>{
    return <Card item={item} handleDelete={props.handleDelete} handleSubmit={props.handleSubmit}/>
       })}
    </div>
    </div>
  )
}

export default CategoriesList