import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";




export default function Footer() {
  return (
    <div className='  py-4  bg-myBlue sm:pb-20  sm:pt-[5rem] sm:h-[95vh] ' >
        <div className =" w-[90%] sm:w-[95%]  flex flex-col my-8 sm:my-0  items-center justify-start bg-white rounded-3xl p-5 m-5 mx-auto ">
            <div className=" w-[98%] sm:w-[90%] sm:h-[71vh] my-auto pt-[1rem] sm:pt-[2rem]">
           
           <div className="flex flex-col sm:flex-row sm:justify-between text-[1rem] sm:text-[1.8rem]  ">
           
            <div className=" ">
             <div className="flex justify-center sm:justify-start ">  
                <p className="text-[0.8rem] sm:text-[1.5rem]" >Say Hello!</p>
             </div>
             <div className="flex justify-center mt-[1.5rem] sm:mt-[0]">
                <p className="text-[0.7rem] text-gray-600 sm:mt-2 sm:text-[1.3rem] ">info@opencoregroup.com</p>
             </div>
             <div className="text-blue-900 mt-[2rem] sm:mt-[3rem] flex  w-full  justify-between ">
                <div className=" bg-gray-200 p-1 ">  <CiInstagram/></div>
                <div className=" bg-gray-200 p-1 ">< FaFacebookF/> </div>
                <div className=" bg-gray-200 p-1 "><CiTwitter/> </div>
                <div className=" bg-gray-200 p-1 "><CiLinkedin/></div>
             </div>
            </div>

            <div className=" w-full sm:w-2/5 text-myBlue sm:mt-0 mt-[1.5rem] ">
                <div className="flex justify-between p-1 ">
                    <div className="text-[0.7rem] sm:text-[1.3rem]">Home</div>
                    <div><p className="text-[0.7rem] sm:text-[1.3rem]">Services</p></div>
                </div>
                <div className="flex justify-between p-1">
                <div className="text-[0.7rem] sm:text-[1.3rem]">About us</div>
                <div><p className="text-[0.7rem] sm:text-[1.3rem]">Contact us</p></div>
                </div>
                <div>
                <div className="p-1"><p className="text-[0.7rem] sm:text-[1.3rem]">Work</p></div>
                </div>

            </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between text-[1rem] sm:text-[1.7rem] mt-[3rem] sm:mt-[4.5rem] text-myLightBlue ">
                <div className="flex text-[0.8rem] sm:text-[1.5rem] justify-center"  >Toronto, ON Canada</div>
                <div className=" flex text-[0.8rem] sm:text-[1.5rem] justify-center sm:mr-[4rem]">OpenCore. All Rights Reserved</div>
            </div>
 
            <div className=" w-full sm:h-[120px] mb-[-2.1rem] flex justify-center sm:mt-20">
                <Image src="footer.svg" className="h-full w-full " alt="Banner_image" height={400} width={100} />
            </div>
            </div>
           
        </div>
       
    </div>
  )
}
