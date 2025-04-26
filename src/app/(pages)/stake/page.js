import StakeLeft from '@/components/stake/StakeLeft'
import StakeRight from '@/components/stake/StakeRight'

import React from 'react'

const page = () => {
  return (

    <div className=' h-full pt-3 pb-10 px-10 flex gap-8 items-center w-full'>
      <div className='w-full h-full'>
        <StakeLeft/>
      </div>
      <div className='h-full flex-8/12'>

        <StakeRight/>
      </div>

    </div>
  
)
}

export default page
