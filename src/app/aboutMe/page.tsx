import React from 'react'
import {IconAlertTriangle} from "@tabler/icons-react";

const page = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-black'>
      <IconAlertTriangle className='h-40 w-40'/>
      <p>This is page is currently under development.</p>
      <p>Sorry for any inconvenience caused.</p>
    </div>
  )
}

export default page
