import Image from 'next/image'

export default function Banner() {
  return (
    <div className=' banner  rounded-3xl '>
        <div>
            <Image src={"union.svg"} className='w-full opacity-20 pb-3' alt='union_image' width={400} height={300}/>
        </div>

<div className='flex flex-col sm:flex-row justify-between  w-[95%] sm:w-[85%] mx-auto sm:py-5'>

<div className="  flex w-full sm:w-1/2  flex-col items-start space-between gap-2 text-white ">
    <h2 className=" text-[2rem] sm:text-[4rem] mb-[0.25em] font-bold  font-sans text-white">
        Transforming <br className=' md:hidden'/> your <br className=' hidden md:block'/>
        <span className="font-bold"> ideas into <br className='md:hidden'/> reality</span></h2>
        <p className=" text-[0.8rem]  sm:text-[2rem]  text-white ">
   Let&apos;s build something extraordinary <br className='md:hidden'/> together to captivate <br className='hidden sm:block' /> your audience.</p>
</div>



<div className=" flex w-full sm:w-2/3 items-center sm:justify-end  h-[13rem]   mt-[2rem] sm:h-[25rem] sm:mt-0 ">
  <div className="  flex  items-center justify-center mx-auto h-[85%] w-2/3 sm:w-1/3 rounded-full border-2 border-white">
  <p className=" text-[1rem] sm:text-[1.8rem] h-fit  max-w-[50%] text-center text-white ">
  Let&apos;s Work Together!
  </p>
  </div>
</div>

</div>

        <div>
        <Image src={"union.svg"} className='w-full  opacity-15 pt-4' alt='union_image' width={400} height={300}/>

        </div>
    </div>


  )
}
