'use client'

import { changeUserPageId } from "@/redux/reducerSlice/userSlice"
import { useDispatch } from "react-redux"

const NavBar= ()=>{
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=> dispatch(changeUserPageId('home'))}>Home</button>
            <button onClick={()=> dispatch(changeUserPageId('input'))}>Input</button>
        </div>
    )
}

export default NavBar