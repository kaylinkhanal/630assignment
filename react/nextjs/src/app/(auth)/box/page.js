'use client'
import { changeBackgroundColor,decreaseWidth, changeShape ,moveBottom,increaseWidth,moveLeft,moveRight, moveUp} from '@/redux/reducerSlice/boxSlice'
import { Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
    const dispatch = useDispatch()
    const [customStyles, setCustomStyles] = useState({})


    // split by : and then by , and add it into a state
    const {padding, width,isCircle,marginLeft,marginTop, height,margin,borderRadius,backgroundColor} = useSelector((state) => state.box)
    const area = borderRadius ? Math.PI * (width/2)**2 : width*height
    const handleChange =(e)=> {
      let text = e?.target?.value
        const output = text.split(',').map((item)=>{
          return item.split(':')
        })
       const styles =  Object.fromEntries(output)
       setCustomStyles(styles)
      dispatch(changeBackgroundColor(e.target.value))
    }
    useEffect(()=>{
      document.body.addEventListener('keydown', (e)=>{
        console.log(e)
          switch(e.key){
            case 'ArrowUp':
              dispatch(moveUp())
              break;
            case 'ArrowDown':
              dispatch(moveBottom())
              break;
            case 'ArrowLeft':
              dispatch(moveLeft())
              break;
            case '+':
              dispatch(increaseWidth())
              break;
            case '-':
              dispatch(decreaseWidth())
              break;
            case 'ArrowRight':
              dispatch(moveRight())
              break;
          }
      })
    },[])
  return (
    <div>
      
        <div
        onClick={()=> dispatch(changeShape())}
        style={{
          position: 'absolute',
          marginLeft: marginLeft,
          marginTop: marginTop,
          backgroundColor:backgroundColor, width:width, margin:margin, height:height, borderRadius:  borderRadius,
           ...customStyles}}>
        </div>
        <div className='absolute bg-teal-600 p-3 bottom-0'>
          <p>area is {area}</p> 
          <p>   <input  onChange={handleChange} placeholder="Property:value"/></p>
        </div>
    </div>
  )
}

export default Box