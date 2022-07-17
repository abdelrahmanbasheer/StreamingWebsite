import request from "../utils/request"

import { useRouter } from "next/router"
const Nav = () => {
    const router=useRouter( )
  return (
   <nav>
    <div className=" flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide ">
        {Object.entries(request).map(([key , {title,url}])=>(
            <h2 key={key} className=" last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500" onClick={()=>router.push(`/?genre=${key}`)}>{title}</h2>
        ))}
    </div>
   </nav>
  )
}

export default Nav