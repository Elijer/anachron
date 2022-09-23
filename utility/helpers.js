export function gg(id){
    return document.getElementById(id);
}

export function isInViewport(el) {

    // Get it's position in the viewport
    var bounding = el.getBoundingClientRect();

    // Log the results
    console.log(bounding);
    // {
    // 	height: 118,
    // 	width: 591.359375,
    // 	top: 137,
    // 	bottom: 255,
    // 	left: 40.3125,
    // 	right: 631.671875
    // }
}

/* var findMiddleElement = (function(docElm){
    var viewportHeight = docElm.clientHeight,
        // here i'm using pre-cached DIV elements, but you can use anything you want.
        // Cases where elements are generated dynamically are more CPU intense ofc.
        elements = $('div'); 

    return function(e){
        var middleElement;
        if( e && e.type == 'resize' )
            viewportHeight = docElm.clientHeight;

        elements.each(function(){
            var pos = this.getBoundingClientRect().top;
            // if an element is more or less in the middle of the viewport
            if( pos > viewportHeight/2.5 && pos < viewportHeight/1.5 ){
                middleElement = this;
                return false; // stop iteration 
            }
        });

        console.log(middleElement);
    }
})(document.documentElement);

$(window).on('scroll resize', findMiddleElement); */