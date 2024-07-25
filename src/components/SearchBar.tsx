import { CiSearch } from "react-icons/ci";


export default function SearchBar() {
  return (
    <div className="sm:p-2 ">
      <div className="flex items-center p-1">
    <div className="">
     <span className="text-4xl"> <CiSearch /></span>
    </div>

      <div className="w-full sm:w-2/5">
        <input className="w-full outline-none text-sm sm:text-xl" placeholder="Search for resources and tutorials"/>
      </div>
      </div>
    </div>
  )
}
