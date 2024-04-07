import React, { ReactNode } from 'react'

function Dashboardlayout({children}:{children:ReactNode}) {
  return (
    <div className='flex gap-3'> 
    <div className='bg-green-300 px-3 py-5 h-80 mt-3'>Dashboardlayout </div> 
<div>{children}</div>
    </div>
  )
}

export default Dashboardlayout;