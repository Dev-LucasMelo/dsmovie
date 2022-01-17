import MovieStars from "../MovieStars"
import'./styles.css'
function MovieScore({Score,Count}) {



    return (
        <>
            <div className="dsmovie-score-container">
                <p className="dsmovie-score-value">{Score > 0 ? Score.toFixed(1) : '-'}</p>
                <MovieStars scores={Score} />
                <p className="dsmovie-score-count">{Count} avaliações</p>
            </div>
        </>
    )
}

export default MovieScore 