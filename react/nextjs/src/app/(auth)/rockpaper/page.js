'use client'
import React, { useEffect, useState } from 'react'
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";

import Confetti from 'react-confetti'
import { Button } from '@nextui-org/react';

const RockPaper = () => {
    const [userChoice, setUserChoice] = useState(null)
    const [newRound, setNewRound] = useState(1)
    const [randomNum ,setRandomNum] = useState(0)
    const handleChange = (choice)=>{
        setUserChoice(choice)
        setNewRound(newRound+1)
    }
    const choices = [
        {name:'rock', icon:  <FaRegHandRock size={100} onClick={()=> handleChange('rock')}/> },
        {name:'paper', icon:  <FaRegHandPaper size={100} onClick={()=> handleChange('paper')}/> },
         {name:'scissor', icon:  <FaRegHandScissors size={100} onClick={()=> handleChange('scissor')}/> },
    ]
    useEffect(()=>{
        const newNum = Math.floor(Math.random() * choices.length)
        setRandomNum(newNum)
    },[userChoice, newRound])
    const confetti =  <Confetti
    width={1300}
    height={300}
  />
  return ( 
    <div>
        Round Number: {newRound}
        <div className='flex gap-6  m-4 p-4 items-center'>
            <div className='bg-pink-100 shadow-lg  w-[50%] h-72'>Computer
            { userChoice && choices[randomNum].icon}
            { userChoice && choices[randomNum].name}
                <Button onClick={()=>setUserChoice(null)}>Reset</Button>
            </div>
            <div className='flex gap-4 justify-center items-center bg-green-100 shadow-lg 
             rounded-xl w-[50%] h-72'>
                     {userChoice}
                {choices.map((item)=>{
                    return  <div className='bg-white  border-black border-8 rounded-3xl p-3'>
                        {item.icon}</div>
                })}
             </div>
        </div>
        { choices[randomNum].name ===  userChoice && "DRAW" } 
        { choices[randomNum].name === 'paper' &&  userChoice=== 'rock' && "You lost" } 
        { choices[randomNum].name === 'scissor' &&  userChoice=== 'paper' && "You lost" } 
        { choices[randomNum].name === 'rock' &&  userChoice=== 'scissor' && "You lost" } 
        { choices[randomNum].name === 'rock' &&  userChoice=== 'paper' && confetti } 
        { choices[randomNum].name === 'paper' &&  userChoice=== 'scissor' && confetti } 
        { choices[randomNum].name === 'scissor' &&  userChoice=== 'rock' && confetti } 
    </div>
  )
}

export default RockPaper