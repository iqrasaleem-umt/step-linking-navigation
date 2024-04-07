import React, { ReactNode } from 'react'

function Analyticslayout({children}:{children:ReactNode}) {
  return (
    <div className='flex gap-3'> 
        <div className='bg-yellow-300 px-2 py-4 h-80 mt-3'>Analyticslayout </div>
<div>{children}</div>
    </div>
  )
}

export default Analyticslayout