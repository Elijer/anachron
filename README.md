# Vite + JSX
https://davidmold.medium.com/use-vite-for-jsx-without-react-e59aed9460f5
If you're getting a problem with it about esbuild, try deleting node-modules and running `npm i`. That worked at least once.

And here's a simple demo project for reference:
https://github.com/davidmold/vite-jsx

# Postcss Plugins:
This guy's introduction is helpful:
https://pawelgrzybek.com/from-sass-to-postcss/#:~:text=The%20main%20difference%20between%20Sass,handles%20plugins%20written%20in%20JavaScript.

10 awesome plugins to make you a wizard:
https://www.hongkiat.com/blog/postcss-plugins/

# Yeah...no thanks PostCSS
Actually transitioning away from PostCss because all style was made with Sass originally, and I can't untangle the ways they work differently.

# Autoplaying videos
Being able to trigger video play doesn't work unless the video is muted. There is an html property of the video tag "muted", but honestly that doesn't seem to do it. I just assigned element.muted = "true" with javascript and that solved my problems.