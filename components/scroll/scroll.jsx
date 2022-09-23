import { pieces } from '/components/portfolio/data.js'
import { gg, isInViewport } from '/utility/helpers'

// This mobile-only component attempts to play the gif of a video if it is in the center of the screen.

export const scroll = () => {
    if (window.innerWidth < 480){

        document.addEventListener('scroll', function(e) {
            for (let piece of pieces){
                if (piece.active == true){
                
                
                    let current = gg("tile-" + piece.id);


                    let imgID = "tile-img-" + piece.id;
                    let gifID = "tile-gif-" + piece.id;

                    if (isInViewport(current)){

                        console.log("in viewport")
                        
                        gg(imgID).style.display = "none";
                        gg(gifID).style.display = "block";

                    } else {
                        gg(imgID).style.display = "block";
                        gg(gifID).style.display = "none";
                    }
                }
            }
        })
   }
}