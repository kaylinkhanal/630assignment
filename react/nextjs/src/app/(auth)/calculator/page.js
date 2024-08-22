'use client'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'

const Calculator = () => {
    const [output, setOutput] = useState('')
  return (
    <div className='bg-black w-80 p-2'>
        <div className='text-white'>{output}</div>
        <Button className='bg-gray-200'>AC</Button>
        <Button className='bg-gray-200'>+/-</Button>
        <Button className='bg-gray-200'>%</Button>
        <Button className='bg-gray-200'>/</Button>
        <Button onClick={()=>setOutput(output+ 9) }>9</Button>
        <Button onClick={()=>setOutput(output+ 8)}  >8</Button>
        <Button>7</Button>
        <Button className='bg-orange-500'>*</Button>
        <Button>6</Button>
        <Button>5</Button>
        <Button>4</Button>
        <Button className='bg-orange-500'>-</Button>
        <Button>3</Button>
        <Button>2</Button>
        <Button>1</Button>
        <Button onClick={()=>setOutput(output+ '+') } className='bg-orange-500'>+</Button>
        <Button>0</Button>
        <Button>.</Button>
        <Button onClick={()=> setOutput(eval(output) )}>=</Button>
    </div>
  )
}

export default Calculator