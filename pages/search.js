import React, { useState } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Thumbnail from '../components/Thumbnail'

const Search = () => {
const [search, setSearch] = useState("")
const [results, setResults] = useState([])
const handleSearch=async()=>{
const res=await fetch(`
https://api.themoviedb.org/3/search/movie?api_key=3a37fda9c777a4585a7e9b0d4c083533&language=en-US&query=${search}&page=1&include_adult=false`)
const data=await res.json()

setResults(data.results)
console.log(results)
}
  return (
    <div>
        <Header></Header>
        <Nav></Nav>
        <div className='mt-6'>
            
            <input style={{borderRadius:"0.5em",border:"none",marginLeft:"340px"}} className=' w-1/2 text-center  focus:outline-none text-black align-middle' value={search} type="text" onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} placeholder="Enter A Movie To Search For"></input>
            <button style={{borderRadius:"3em",backgroundColor:"white"}} className=' border- p-2 text-black m-3  ' onClick={handleSearch}>Search</button>
        </div>
        <div className="px-5 my-10 p-5 sm:grid m:grid-cols-2 xl:grid-cols-3 gap-3">
        {results.map((result)=>(<Thumbnail key={result.id} result={result}></Thumbnail>))}


    </div>
    </div>
  )
}

export default Search