import React from 'react'
import Link from "next/link"
import { useState,useEffect } from 'react';
import { fetchVideos,youtubeOptions } from '../../utils/fetchvideos';
import Header from '../../components/Header';
import Image from 'next/image';
const BASE_URL="https://image.tmdb.org/t/p/original/"
import { ThumbUpIcon } from "@heroicons/react/outline"
const Details = ({movieData}) => {
    const [movieVideos, setMovieVideos] = useState([]);
    
    useEffect(() => {
      const fetchYoutubeVideos=async()=>{
        const youtubeSearchUrl="https://youtube-search-and-download.p.rapidapi.com";
        const exerciseVideosData= await fetchVideos(`${youtubeSearchUrl}/search?query=${movieData.title}`,youtubeOptions)
        setMovieVideos(exerciseVideosData.contents)  
      }
      fetchYoutubeVideos();
      
    }, [movieData.id])

  return (
    <div >
   <Header></Header>
   <div  className= "border-t-2 border-gray-800">
    <div className='m-4'>
    <Image layout='responsive' src={`${BASE_URL}${movieData.backdrop_path}`||`${BASE_URL}${movieData.poster_path}`} style={{borderRadius:"0.5em"}} width={800} height={500}></Image>
    </div>
    <p className='uppercase mt-3 mb-3 text-center '>{movieData.title}</p>
    <div className='m-3'>
       <p className='text-center m-3'>{movieData.overview}</p>
       <p className='text-center capitalize  m-3'>release date : {movieData.release_date ||movieData.first_air_date}</p>
       <p className='text-center capitalize m-3'>voting count: {movieData.vote_count} </p>
       <p className='text-center capitalize m-3'>average votes: {movieData.vote_average} ★</p>
        </div>
        <h1 className='uppercase m-4 border-b-2 border-gray-800 font-bold'>{movieData.title} on youtube : </h1>
    <div className='sm:grid m:grid-cols-2 xl:grid-cols-3 gap-4 text-center'>
      {movieVideos.slice(0,6).map((item,index)=>(
        <a key={index}  href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer"> 
          <img style={{borderRadius:"0.5em"}} className=" max-w-md min-w-full m-4" src={item.video.thumbnails[0].url} alt={item.video.title}></img>
          <p className=' m-4'>{item.video.title.slice(0,50)}</p>
          <p className='m-4'>{item.video.channelName}</p>

        </a>
      ))}
    </div>
 

   </div>
   </div>
  )
}

export default Details


export async function getServerSideProps({ params: { id } }) {
    const request= await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3a37fda9c777a4585a7e9b0d4c083533&language=en-US`
      );
      const data=await request.json();
      return{
        props:{
          movieData: data,
        }
       
    
      }
    };
  