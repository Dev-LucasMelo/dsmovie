import { ReactComponent as StarFull } from './../../assets/img/star-full.svg'
import { ReactComponent as StarEmpty } from './../../assets/img/star-empty.svg'
import { ReactComponent as StarHalf } from './../../assets/img/star-half.svg'

import'./styles.css'


function Star ({fill}) {
    if (fill === 0) {
        return <StarEmpty />
    } else if (fill === 1) {
        return <StarFull />
    } else {
        return <StarHalf />
    }


}



function MovieStars({scores}) { 



    // EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]

function getFills(score) {


    const fills = [0, 0, 0, 0, 0];
  
    const integerPart = Math.floor(score);
  
    for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
    }
  
    const diff = score - integerPart;
    if (diff > 0) {
      fills[integerPart] = 0.5;
    }
  
    return fills;
  }

    const estrelas = getFills(scores)  
  
    return (
        <>
            <div className="dsmovie-stars-container">
                <Star fill={estrelas[0]} />
                <Star fill={estrelas[1]} />
                <Star fill={estrelas[2]} />
                <Star fill={estrelas[3]} />
                <Star fill={estrelas[4]} />
            </div>

        </>
    )
}

export default MovieStars