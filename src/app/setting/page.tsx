"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function Setting() {
  const router=useRouter()
  function handleback(){ 
    router.back();
  };
  function handleanalytics (){ 
    router.push("/analytics")
  }
  
  return (
    <div> 
      <div><button className='bg-red-300 mt-2 p-2  rounded-sm' onClick={handleback}>Back</button></div>
      <div><button className="bg-teal-300 mt-2 rounded-sm" onClick={handleanalytics}>Go to analytics page</button></div>
      Setting
      </div>
  )
}

export default Setting;