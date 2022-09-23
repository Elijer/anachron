import { createElement, append } from '/utility/jsx'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

import { gg } from '/utility/helpers'
import { stacks } from './data.js'

export const stack = () => {

    let previousSelection = "none"

    // 1) Create a container for the stack descripton
    let stackDescription =
    <div id = "tech-description-display" class = "fades">
        <div id = "name-block">
            <h1 id = "tech-description-name"></h1>
        </div>
        <p id = "tech-description-description"></p>
    </div>
    document.getElementById("root").appendChild(stackDescription)
    
    // 2) Create a bubble for each element in tech
    stacks.forEach(tech => {
        let techBubble =
        <span class = "tech-bubble noselect" id = {`techbubble-${tech.name}`} data-descrip = {tech.description} data-link = {tech.link} > {tech.name} </span>;

        document.getElementById("tech-list").appendChild(techBubble);

        techBubble.addEventListener("click", () => {
            previousSelection = displayStackInfo(previousSelection, tech, stacks)
        })

        append(techBubble, "tech-list");

    });

}

const displayStackInfo = (previousSelection, currentTech, techs) => {

    const currentSelection = currentTech.name

    techs.forEach(tech => {
        const bubble = gg(`techbubble-${tech.name}`)
        if (tech.name === currentSelection && tech.name !== previousSelection){
            bubble.style.cssText =
            `
                opacity: 1;
                background: rgb(140, 139, 226);
                color: white;
            `
        } else {
            bubble.style.cssText =
            `
                background: rgb(white, .5);
                color: rgb(255, 123, 15, .8);
            `
        }
    })

    let port = gg("port");
    let display = gg("tech-description-display");
    let desc = gg("tech-description-description");
    let name = gg("tech-description-name");
    let about = gg("about")

    if (previousSelection === currentSelection){
        display.style.display = "none"
        port.style.display = "grid"
        return "none"
    } else {
        display.style.display = "block"
        desc.innerHTML = currentTech.description;
        name.innerHTML = currentTech.name;
        port.style.display = "none"
        about.style.display = "none"
        return currentSelection
    }
}