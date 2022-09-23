import { createElement, append } from '/utility/jsx'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

import { gg } from '/utility/helpers'

export const textbox = () => {

    // The idea for this to create a display element next to my name or something
    // To display information, either about the site - instructions essentially -
    // or about a particular technology being hovered over


    // 1) Create a container for the stack descripton
    let textbox =
    <div id = "textbox">
        <p id = "text-info"> Welcome to my portfolio! Each tile showcases a site I built. Hover to investigate and click to visit. Click my name to learn more about me. </p>
    </div>

    document.getElementById("root").appendChild(textbox)
    //gg("textbox").style.display = "none" // make it initially hidden

/*     let title = gg("site-title")
    let port = gg("port");
    let mobile = gg("mobile-image");
    let desktop = gg("desktop"); */

    if (window.innerWidth > 480){

    } else {

    }
}