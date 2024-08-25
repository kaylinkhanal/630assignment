import React from 'react'

const MonsterBlack = ({children}) => {
  return (
    <div className='bg-black text-white p-12'>
     {children}
    </div>
  )
}

const ProductDetails =()=> {
    return (
        <MonsterBlack >
            <div className='m-12 p-12 shadow-md bg-red-300'>
                    HAWKINS COOKER
                    price 4000
                </div>
        </MonsterBlack>
   
    )
}

export default ProductDetails