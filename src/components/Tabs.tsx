"use client"

import Image from "next/image"
import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Tabs() {
    const tabs=['All Resources','Design','Development','Marketing','Branding']

    const [selectedId, setId] = useState <number | null> (null)

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
    <div className='mt-5 flex justify-between    '>
    <div className="p-2 hidden md:flex">    {
            tabs.map((item,ind) => <button key={ind} className={`border mx-5 p-1 text-[2rem] font-light  m-1  rounded-md ${selectedId === ind ?'bg-gray-300':''}`}
             onClick={()=>setId(ind)} >
                {item}
                </button>)
        }
        </div>

        <div className="relative md:hidden">
        <button
          onClick={toggleDropdown}
          className="  py-2 px-4 rounded flex items-center "
        >
          All Resources<span className=" ">{<RiArrowDropDownLine/>}</span>
        </button>
       
        {isDropdownOpen && (
          <div className="absolute  mt-2 w-48 bg-white rounded-md shadow-lg z-20">
            { <div className="flex flex-col">
                <button className="border mx-1 p-1  font-light  m-1  rounded-md">Design</button>
                <button className="border mx-1 p-1  font-light  m-1  rounded-md">Marketing</button>
                <button className="border mx-1 p-1  font-light  m-1  rounded-md">Branding</button>
                <button className="border mx-1 p-1  font-light  m-1  rounded-md">Development</button>
                </div>
            }
          </div>
        )}
      </div>




        <div className=" flex items-center">
            <Image src="filter.svg" alt="filter_image" height={20} width={20}/>
            <p className="m-1 text-xl">Filters</p>
        </div>
    </div>
  )

 

  // return (
  //   <div className="flex items-center justify-center space-x-4">
  //     {/* Conditionally render buttons based on screen size */}
  //     <div className="hidden md:flex items-center space-x-4">
  //       <button className="bg-blue-500 text-white py-2 px-4 rounded">
  //         Button 1
  //       </button>
  //       <button className="bg-blue-500 text-white py-2 px-4 rounded">
  //         Button 2
  //       </button>
  //       <button className="bg-blue-500 text-white py-2 px-4 rounded">
  //         Button 3
  //       </button>
  //       <button className="bg-blue-500 text-white py-2 px-4 rounded">
  //         Button 4
  //       </button>
  //     </div>

  //     {/* Dropdown toggle button */}
  //     <div className="relative md:hidden">
  //       <button
  //         onClick={toggleDropdown}
  //         className="bg-blue-500 text-white py-2 px-4 rounded"
  //       >
  //         Menu
  //       </button>
  //       {/* Dropdown content */}
  //       {isDropdownOpen && (
  //         <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
  //           <div className="py-1">
  //             <a
  //               href="#"
  //               className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
  //             >
  //               Item 1
  //             </a>
  //             <a
  //               href="#"
  //               className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
  //             >
  //               Item 2
  //             </a>
  //             <a
  //               href="#"
  //               className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
  //             >
  //               Item 3
  //             </a>
  //             <a
  //               href="#"
  //               className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
  //             >
  //               Item 4
  //             </a>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );

}
