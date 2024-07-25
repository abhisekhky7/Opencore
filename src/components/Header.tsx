import Image from "next/image";

export default function Header() {
  return (<header>
    <div className="w-full flex justify-center items-center">
        <div className="w-full   h-[10vh] sm:h-full">
    <Image src="union.svg"  alt="union" className="w-full opacity-90 sm:opacity-80" width={100} height={100}  />
    </div>

<div className="flex fixed  mynav p-1 border border-gray-400  items-center   ">
    <div className="">
        <Image src="group.svg" alt="group" width={100} height={37.23} className="p-2 size-14 sm:p3 sm:size-20  m-1 "/>
    </div>
    <div className="absolute left-1/2 h-full w-px bg-neutral-300 -translate-x-1/2 " style={{opacity:1}}>  </div>
    <div>
        <Image src="menu.svg" alt="group" width={41} height={36} className="  p-2 size-14 sm:size-20 m-1"/>
    </div>

</div>

    </div>
    </header>
  )
}
