import SideBar from '@/components/sidebar/page'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const AdminLayout = ({children}) => {
  return (
    <div >
        <div className='flex'>
        <SideBar/>
        <Toaster
            position="top-center"
            reverseOrder={false}
            />
        {children}
        </div>
       
   
        
        </div>
  )
}

export default AdminLayout