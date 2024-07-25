import React from 'react'

export default function MainTitle() {
  return (
    <div className=''>
         <div className="mx-auto">
        <p className={` text-[2rem] text-center sm:text-[4rem] text-myBlue font-bold font-sans `}>
          Your Ultimate <br className='block md:hidden'/> Resource <br className=' hidden sm:block'/>Hub for <br className='block sm:hidden'/> Digital Success</p>
      </div>
     <div className=""> 
      <p className=" text-myLightBlue font-medium text-[1rem] text-center sm:text-[1.6rem] " >
        Explore our comprehensive library of tools <br className='sm:hidden block'/> and templates for <br className='hidden sm:block' />
        developers, designers, marketers, and branding experts.</p>
      </div>
    </div>
  )
}
