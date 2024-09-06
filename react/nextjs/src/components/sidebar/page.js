
'use client'
import { Listbox, ListboxItem } from '@nextui-org/react'
import React from 'react'

const SideBar = () => {
  return (
    <div>
      <Listbox className='shadow-md'>
       <ListboxItem href='/dashboard'>Dashboard</ListboxItem>
        <ListboxItem href='/categories'>Categories</ListboxItem>
        <ListboxItem href='/products'>Products</ListboxItem>
        <ListboxItem>Users</ListboxItem>
      </Listbox>
    </div>
  )
}

export default SideBar




























// 'use client'
// import React from "react";
// import { FaTrash } from "react-icons/fa";
// import { useSelector } from "react-redux";


// export default function Sidebar() {
//     const {wishlistItems}= useSelector(state=>state.product)
//     const {name} = useSelector(state=>state.user)

//   return (
//     <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    
//       {name}, your wishlist item:

//      <table>
//       <tr>
//         <td>Product Name</td>
//         <td>Product Price</td>
//         <td>Unit Quantity</td>
//         <td>Image </td>
//         <td>Sum Total </td>
//       </tr>
//       <tr>
//         <td>hawkins</td>
//         <td>2000</td>
//         <td>2</td>
//         <td>Image </td>
//         <td>4000 </td>
//       </tr>
//      </table>
//     {wishlistItems.length>0 ? wishlistItems.map((item,id)=>{
//         return <div className="flex">
//             <li>{id+1}-------- {item.title}</li> 
//             <FaTrash/>
//         </div>
//     }): "No Wishlist!!"}
//     </div>
//   );
// }
