'use client'
import { Button } from '@nextui-org/react';
import React, { useState } from 'react'
import { GoThumbsup } from "react-icons/go";
import { FaRegAngry } from "react-icons/fa";
import { FaSurprise } from "react-icons/fa";
import { FaLaughSquint } from "react-icons/fa";
const Facebook = () => {
    const [reaction, setReaction] = useState(null)
    const [openDiv, setOpenDiv] = useState(false)
    const changeReaction = (newReaction) => {
        setReaction(reaction === newReaction ? null : newReaction)
    }   


    const GenerateReactionButton = () => {
        if(reaction == 'angry'){
            return <Button onMouseEnter={()=> setOpenDiv(true)} onClick={()=>changeReaction('angry')}><FaRegAngry color='red'/> Angry</Button>
        }else if(reaction == 'wow'){
            return <Button   onMouseEnter={()=> setOpenDiv(true)} onClick={()=>changeReaction('wow')}>  <FaSurprise color='orange'/> {reaction} </Button>
        }else if(reaction == 'haha'){
            return <Button onMouseEnter={()=> setOpenDiv(true)} onClick={()=>changeReaction('haha')}>  <FaSurprise  color='orange'/> {reaction} </Button>
        }else {
            return <Button  onMouseEnter={()=> setOpenDiv(true)} className={reaction=='like'? 'text-blue-700 font-semibold': null}  onClick={()=>changeReaction('wow')}>  <GoThumbsup /> {reaction || 'Like'} </Button>
        }
    }
    return (
        <div>
            {openDiv && (
                <div onMouseLeave={()=> setTimeout(() => {
                    setOpenDiv(false)
                }, 1000)} className='flex gap-4 m-2 p-2 shadow-md w-36'>
                <GoThumbsup size={50} onClick={()=>changeReaction('like')}/> 
                <FaRegAngry size={50} color='red' onClick={()=>changeReaction('angry')}/> 
                <FaSurprise size={50} color="orange" onClick={()=>changeReaction('wow')}/> 
                <FaLaughSquint size={50} color="orange" onClick={()=>changeReaction('haha')}/> 
                </div>
            )}
            <GenerateReactionButton/>
        </div>
      )
}

export default Facebook