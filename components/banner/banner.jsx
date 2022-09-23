import { createElement, append } from '../../utility/jsx.js'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------


export const banner = () => {

    let banner = (
    <div id = "banner">
        <h1 id = "site-title">ELIJAH KENNEDY</h1>
        <div id = "tech-list" class = "tech-list"></div>
    </div>)

    append(banner);

    return banner;
}