import { ThumbUpIcon } from "@heroicons/react/outline"
import Image from "next/image"
import Link from "next/link"
import notfoundimage from "../public/image-not-found.jpg"
const Thumbnail = ({result}) => {
    const BASE_URL="https://image.tmdb.org/t/p/original/"
  return (
    <Link href={`/movie/${result.id}?api_key=3a37fda9c777a4585a7e9b0d4c083533&language=en-US`}>
    <div className="group cursor-pointer p-2 transition  duration-200 ease-in transform sm:hover:scale-105 hover:z-50 ">
        <Image 
        style={{borderRadius:"0.5em"}}
        layout="responsive" 
        height={1080} 
        width={1920}
        src={`${BASE_URL}${result.backdrop_path}`||`${BASE_URL}${result.poster_path} `|| notfoundimage}
        blurDataURL={`${BASE_URL}${result.backdrop_path}`||`${BASE_URL}${result.poster_path}`}
        placeholder="blur"
        ></Image>
        <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title|| result.original_name}</h2>
        <p className="capitalize flex items-center opacity-0 group-hover:opacity-100 transition-all duration-100 ease-in-out">{result.media_type&&`${result.media_type} •`}{""}{result.release_date ||result.first_air_date}•{"  "}{result.vote_count}<ThumbUpIcon className="h-5 mx-2"></ThumbUpIcon>{"      "}{result.vote_average}{""}★</p>
        </div>
        
    </div>
    </Link>
  )
}

export default Thumbnail