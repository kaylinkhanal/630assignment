'use client'

import React, { useEffect, useState } from 'react'

import {Button, Input, Pagination} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import CustomToast from '@/components/customToast/page';
const Categories = () => {
  const [page,setPage] = useState(1)
  const [productName ,setProductName] = useState('')
  const [sizePerPage, setSizePerPage] = useState(5)
  const [selectedRows, setSelectedRows] = useState([])
  const [users, setUsers] = useState([])
  const fetchData = async()=> {
      const {data} = await axios.get(process.env.NEXT_PUBLIC_API_URL+'/products?offset='+ (sizePerPage*page-sizePerPage) +'&limit='+sizePerPage+'&title='+productName)
       if(data) setUsers(data)
  }
  const handleDelete =async()=> {
    {selectedRows.forEach(async(item)=>{
      debugger;
      const {data}= await axios.delete(process.env.NEXT_PUBLIC_API_URL + '/products/'+item)
      if(data){ toast.custom((t) => (
      <CustomToast t={t} actionImage={item.image} actionTitle="Deleted Products successfully" actionName={item.name}/>
      ))
      fetchData()
    }
    })}
   
 
  } 
  useEffect(()=>{
    fetchData()
  },[page,sizePerPage,productName])
  const handleChange = (e)=>{
    setSelectedRows(Array.from(e))
  }
  return (
    <div className=''>
        <select onChange={(e)=>setSizePerPage(e.target.value)}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
        <Input placeholder='Search Product name' value={productName} onChange={(e)=>setProductName(e.target.value)}/>
         {selectedRows.length> 1 && <Button onClick={handleDelete}>Delete All</Button>}
        <Table selectionMode="multiple" onSelectionChange={handleChange} aria-label="Example static collection table">
      <TableHeader>
      <TableColumn>Id</TableColumn>
        <TableColumn>Title</TableColumn>
        <TableColumn>Price</TableColumn>
        <TableColumn>CreationAt</TableColumn>
        <TableColumn>Edit</TableColumn>
        <TableColumn>Delete</TableColumn>
      </TableHeader>
      <TableBody>
      {users.length> 0 ? users.map((item)=> {
          return (
            <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.creationAt}</TableCell>
            <TableCell><FaEdit/></TableCell>
            <TableCell><FaTrash/></TableCell>
          </TableRow>
          )
        }) : "Loading ..."}
      </TableBody>
    </Table>
         <Pagination total={10} initialPage={page} onChange={(number)=> setPage(number)}/>
    </div>
  )
}

export default Categories