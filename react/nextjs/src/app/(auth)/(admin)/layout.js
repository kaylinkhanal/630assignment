import SideBar from '@/components/sidebar/page'
import React from 'react'

const AdminLayout = ({children}) => {
  return (
    <div >
        <div className='flex'>
        <SideBar/>
        {children}
        </div>
       
   
        
        </div>
  )
}

export default AdminLayout