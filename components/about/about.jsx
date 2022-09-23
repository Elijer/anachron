import { createElement, append } from '/utility/jsx.js'
import { gg } from '/utility/helpers.js'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

export const about = () => {


    // 1) Create a container for the stack descripton
    let about =
    <div id = "about" class = "fades noselect">
        <img id = "mobile-image" src = "https://portfoliosite-h264.s3.us-east-2.amazonaws.com/bio2.jpg" width = "300px"></img>
        <div id = "content">
            <h1> About Me </h1>
            <p> Full-stack web developer based in Memphis. I'll sprint towards any opportunity to try something new. If you're interested in gamejams, I'm slowly putting together an international team.</p>
            <p> Get in touch at <a href="mailto:elijahclimbs@gmail.com">elijahclimbs@gmail.com.</a></p>
        </div>
        <img id = "desktop-image" src = "https://portfoliosite-h264.s3.us-east-2.amazonaws.com/bio2.jpg"></img>
    </div>

    document.getElementById("root").appendChild(about)
    gg("about").style.display = "none" // make it initially hidden

    var bio;

    const aboutContent =
    "Hi, I'm a web designer based in Memphis. My role as a developer is like playing midfield in soccer - I am neither a frontend nor backend specialist; I can support everything in between. "
    
    let title = gg("site-title")
    let port = gg("port");
    let mobile = gg("mobile-image");
    let desktop = gg("desktop");


    title.addEventListener("mouseover", ()=> {
        if (!bio) title.innerHTML = "- click for bio -"
        if (bio) title.innerHTML = "<< back to portfolio"
    })

    title.addEventListener("mouseleave", ()=> {
        title.innerHTML = "ELIJAH KENNEDY"
    })

    if (window.innerWidth > 480){
        title.addEventListener("click", ()=> {
            if (!bio){
                bio = true;
                port.style.display = "none";
                about.style.display = "grid";
                gg("tech-list").style.display = "none"
            } else if (bio) {
                gg("tech-list").style.display = "block"
                bio = false;
                port.style.display = "grid";
                about.style.display = "none";
            }
        })
    } else {
        title.addEventListener("click", ()=> {
            if (!bio){
                bio = true;
                port.style.display = "none";
                about.style.display = "block";
            } else if (bio) {
                bio = false;
                port.style.display = "block";
                about.style.display = "none";
            }

        })
    }
}