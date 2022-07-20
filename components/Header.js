import Image from "next/image"
import HeaderItem from "./HeaderItem"

import{
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline"
import Link from "next/link"

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
        <div className="flex flex-grow justify-evenly max-w-2xl ">

        <Link href="/" passHref>
    <div className=" flex flex-col items-center cursor-pointer  group w-12 sm:w-20 hover:text-white ">
    <HomeIcon className="h-8 mb-1 group-hover:animate-bounce"></HomeIcon>
    <p className="opacity-0 group-hover:opacity-100 tracking-widest">HOME</p>
    </div>
    </Link>
        <Link href="/?genre=fetchTrending" passHref>
    <div className=" flex flex-col items-center cursor-pointer  group w-12 sm:w-20 hover:text-white ">
    <LightningBoltIcon className="h-8 mb-1 group-hover:animate-bounce"></LightningBoltIcon>
    <p className="opacity-0 group-hover:opacity-100 tracking-widest">TRENDING</p>
    </div>
    </Link>
        <Link href="/" passHref>
    <div className=" flex flex-col items-center cursor-pointer  group w-12 sm:w-20 hover:text-white ">
    <BadgeCheckIcon className="h-8 mb-1 group-hover:animate-bounce"></BadgeCheckIcon>
    <p className="opacity-0 group-hover:opacity-100 tracking-widest">PG</p>
    </div>
    </Link>
        <Link href="/" passHref>
    <div className=" flex flex-col items-center cursor-pointer  group w-12 sm:w-20 hover:text-white ">
    <CollectionIcon className="h-8 mb-1 group-hover:animate-bounce"></CollectionIcon>
    <p className="opacity-0 group-hover:opacity-100 tracking-widest">COLLECTIONS</p>
    </div>
    </Link>
        <Link href="/" passHref>
    <div className=" flex flex-col items-center cursor-pointer  group w-12 sm:w-20 hover:text-white ">
    <SearchIcon className="h-8 mb-1 group-hover:animate-bounce"></SearchIcon>
    <p className="opacity-0 group-hover:opacity-100 tracking-widest">SEARCH</p>
    </div>
    </Link>
        <Link href="/" passHref>
    <div className=" flex flex-col items-center cursor-pointer  group w-12 sm:w-20 hover:text-white ">
    <UserIcon className="h-8 mb-1 group-hover:animate-bounce"></UserIcon>
    <p className="opacity-0 group-hover:opacity-100 tracking-widest">ACCOUNT</p>
    </div>
    </Link>

        </div>
     <Link href="/" passHref><Image src="https://links.papareact.com/ua6" width="200" height="100"  className="cursor-pointer"></Image></Link>
        
         </header>
  )
}

export default Header