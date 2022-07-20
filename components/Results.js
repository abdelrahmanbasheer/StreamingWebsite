
import Thumbnail from "./Thumbnail"
const Results = ({results}) => {
  console.log(results)
  return (
    <div className="px-5 my-10 p-5 sm:grid m:grid-cols-2 xl:grid-cols-3 gap-3">
        {results.map((result)=>(<Thumbnail key={result.id} result={result}></Thumbnail>))}


    </div>
  )
}

export default Results