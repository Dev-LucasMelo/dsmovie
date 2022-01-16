import Pagination from "../../components/Pagination"
import MovieCard from "../../components/MovieCard"
import Axios from "axios"
import { BASE_URL } from "../../utils/requests"
import { useState,useEffect } from "react"
import { MoviePage } from '../../types/movie.ts'


function Listing() {

const [pageNumber,setPageNumber] = useState(0)

useEffect(()=> {
    Axios.get(`${BASE_URL}/movies?size=12&page=3`)
    .then(response => {
        const Data = response.data ;
        setPageNumber(Data.number)
        
    })  
},[])
  
    return (
        <>
        <p>{pageNumber}</p>
            <Pagination />

            <div className="container" >
                <div className="row" >
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listing