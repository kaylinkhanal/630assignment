'use client'
import { Button } from '@nextui-org/react';
import { useState } from "react";

import React from 'react'

const Home = () => {
  let [num, setNum] = useState(10);
  const handleChange = (operation)=>{
    alert("hi")
    if(operation=== 'inc') {
      setNum(num + 1)
    }else{
      setNum(num - 1)
    }
  }

  return (
    <div>
      <Button onClick={()=>handleChange('dec')}>-</Button>
      {num}
      <Button onClick={()=>handleChange('inc')}>+</Button>
      </div>
  )
}




export default Home