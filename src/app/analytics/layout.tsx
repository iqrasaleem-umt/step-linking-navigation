import React, { ReactNode } from 'react'

function Layout( {children}: {children:ReactNode}) {
  return (
    <div> 
        <div className='text-blue-500 underline'>details </div>
        <div>
            {children}
        </div>
         </div>
  )
}

export default Layout;