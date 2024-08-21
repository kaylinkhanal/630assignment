'use client'
import { Button, Image } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

const Bird = () => {
    const [randomNum , setRandomNum] = useState(0)
    const [isGameStopped, setIsGameStopped] = useState(false)
    const birdCages = ['', '💣','']
    useEffect(() => {
        if(!isGameStopped){
            setTimeout(() => {
                let newNum =  Math.floor(Math.random() * birdCages.length)
                if(newNum === randomNum){
                       newNum== 2 ? newNum= 0: newNum=newNum+1
                }
                 setRandomNum(newNum)
             }, 50);
        }
      }, [randomNum]);
      
      const handleStop = ()=>{
        setIsGameStopped(!isGameStopped)
      }
  return (
    <div >
       {randomNum}
        {birdCages.map((item, id)=>{
            return <div className='p-2 m-2 h-44 shadow w-24'>
                  {item}
                {id === randomNum &&  <Image src="https://media.istockphoto.com/id/626132614/photo/blue-fronted-redstart-the-beautiful-blue.jpg?s=612x612&w=0&k=20&c=V9ZpAJrnOPxgf9TiT3wxk77V2TbKqiXl_5yOBL1DP_c="
                    width={100}
                    height={100}
                />}
                {id===randomNum && isGameStopped && item &&  <Image src='https://media.tenor.com/aZMV_bT0gVEAAAAi/the-blobs-live-on-bomb.gif'
                  width={100}
                  height={100}
                />
            }
              </div>
        })}
        <Button onClick={handleStop}>Stop</Button>
    </div>
  )
}

export default Bird