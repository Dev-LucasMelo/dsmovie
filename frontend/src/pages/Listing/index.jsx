import Pagination from "../../components/Pagination"
import MovieCard from "../../components/MovieCard/index"
import Axios from "axios"
import { BASE_URL } from "../../utils/requests"
import { useState,useEffect } from "react"



function Listing() {

const [pageNumber,setPageNumber] = useState(0)

const[page,setPage] = useState({
    content: [],
    last: true,
    totalPages:0,
    totalElements:0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true
})

useEffect(()=> {
    Axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
    .then(response => {
        const Data = response.data ;
        setPageNumber(Data.number)
        setPage(Data)
    })  
},[pageNumber])
  
const handlePageChange = (newpage) => {
    setPageNumber(newpage)
}

    return (
        <>
        
            <Pagination page={page} onChange={handlePageChange} />

            <div className="container" >
                <div className="row" >

                    {
                        page.content.map(item => 
                            (
                                <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                                    <MovieCard movie={item} />
                                </div>
                            )
                        )
                    }

                  

                </div>
            </div>
        </>
    )
}

export default Listing