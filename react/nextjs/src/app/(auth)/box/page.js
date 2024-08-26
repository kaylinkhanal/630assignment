'use client'
import { changeToCircle ,increaseWidth} from '@/redux/reducerSlice/boxSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
    const dispatch = useDispatch()
    const {padding, width, height,margin,borderRadius,backgroundColor} = useSelector((state) => state.box)
  return (
    <div>
       
        <div style={{backgroundColor:backgroundColor, width:width, margin:margin, height:height, borderRadius: borderRadius}}>

        </div>
        <input placeholder="Property:value"/>
        <button onClick={()=> dispatch(changeToCircle())}>Change to cirlce</button>
        <button onClick={()=> dispatch(changeToCircle())}>+</button>
        <button onClick={()=> dispatch(increaseWidth())}>-</button>

    </div>
  )
}

export default Box