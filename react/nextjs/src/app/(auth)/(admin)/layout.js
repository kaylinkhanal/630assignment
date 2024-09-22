'use client'
import SideBar from '@/components/sidebar/page'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import React from 'react'

const AdminLayout = ({children}) => {
  return (
    <div >
        <div className='flex'>
        <SideBar/>
        <Dropdown>
      <DropdownTrigger>
      <Avatar className='absolute right-10 top-5' isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>

       
        {children}
        </div>
       
   
        
        </div>
  )
}

export default AdminLayout