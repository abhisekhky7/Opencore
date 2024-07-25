import Image from 'next/image'

const data = [
    {img:"one.svg",title:"Case Study Template: FlipX, an Investment Attraction Startup",tags:"Design File"},
    {img:"two.svg",title:"Designing Impression: The Power of First Impressions",tags:"Github Resource"},
    {img:"three.svg",title:"Fluid Card Animation in After Effects",tags:"Design UI UX Branding"},
    {img:"four.svg",title:"Designing Impression: The Power of First Impressions",tags:'Design UI UX Branding'},
    {img:"five.svg",title:"Designing Impression: The Power of First Impressions",tags:'Design'},
    {img:"six.svg",title:"OpenCore Customer Acquisition Strategy",tags:"Marking Pdf"},
]

export default function Cards() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 w-full gap-2'>
        {
            data.map((item,ind)=> (
               <div key={ind} className=''>
                <div>
                    <Image className=" w-full" src={item.img} height={200} width={200} alt='card_image'/>
                </div>
                <div className=''>
                    <p className=' text-[1.2rem] sm:text-[2rem] text-myBlue sm:mt-1'>{item.title}</p>
                </div>
                <div className=''>
                    <p className='text-[0.6rem] sm:text-[1.2rem] text-myLightBlue'>{item.tags }</p>
                </div>
               </div>
            ))
        }
    </div>
  )
}
