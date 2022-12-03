position = 1;

function changeLeft(){
    if (window.position == 1){
        document.getElementById("titreC").innerHTML="QUICK";
        document.getElementById("paraC").innerHTML="Don't panic! Discovering the story will only take you 1h30!!! Hey yes fast isn't it?";
        window.position = 5;
    }else if (window.position == 2){
        document.getElementById("titreC").innerHTML="EFFECTIVE";
        document.getElementById("paraC").innerHTML="Who says fast says efficient ! We have chosen the best and most beautiful (obviously) cult places in history of Montreuil.";
        window.position = 1;
    }else if (window.position == 3){
        document.getElementById("titreC").innerHTML="NO EFFORTS";
        document.getElementById("paraC").innerHTML="If walking in the street and take beautiful pictures is tiring it won't be the case here !";
        window.position = 2;
    }else if (window.position == 4){
        document.getElementById("titreC").innerHTML="ENTERTAINING";
        document.getElementById("paraC").innerHTML="Between us a little walk for your culture from time to time it does not kill and moreover it occupies you and entertains you!";
        window.position = 3;
    }else if (window.position == 5){
        document.getElementById("titreC").innerHTML="FREE !";
        document.getElementById("paraC").innerHTML="In this world where everything has to be paid for, what better way to enrich your culture for free than by clicking here .";
        window.position = 4;
    }
}

function changeRight(){
    if (window.position == 1){
        document.getElementById("titreC").innerHTML="QUICK";
        document.getElementById("paraC").innerHTML="Don't panic! Discovering the story will only take you 1h30!!! Hey yes fast isn't it?";
        window.position = 2;
    }else if (window.position == 2){
        document.getElementById("titreC").innerHTML="EFFECTIVE";
        document.getElementById("paraC").innerHTML="Who says fast says efficient ! We have chosen the best and most beautiful (obviously) cult places in history of Montreuil.";
        window.position = 3;
    }else if (window.position == 3){
        document.getElementById("titreC").innerHTML="NO EFFORTS";
        document.getElementById("paraC").innerHTML="If walking in the street and take beautiful pictures is tiring it won't be the case here !";
        window.position = 4;
    }else if (window.position == 4){
        document.getElementById("titreC").innerHTML="ENTERTAINING";
        document.getElementById("paraC").innerHTML="Between us a little walk for your culture from time to time it does not kill and moreover it occupies you and entertains you!";
        window.position = 5;
    }else if (window.position == 5){
        document.getElementById("titreC").innerHTML="FREE !";
        document.getElementById("paraC").innerHTML="In this world where everything has to be paid for, what better way to enrich your culture for free than by clicking here .";
        window.position = 1;
    }
}

if (document.readyState === 'complete') {
    changeLeft();
}else {
    document.addEventListener('DOMContentLoaded', function() {
        changeLeft();
    });
}

/*

$( function () {
    
    var charts = $( ".chart" );
    
    // Return boolean when an element is partially visible on screen
    function isPartialVisible ( element ) {
        var
            viewPortHeight = $( window ).height(), // Viewport Height
            scrollTop = $( window ).scrollTop(), // Scroll Top
            currElementPosY = $( element ).offset().top,
            elementHeight = $( element ).height();
        
        return ( ( currElementPosY + elementHeight + elementHeight ) > scrollTop && currElementPosY < ( viewPortHeight + scrollTop ) );
    }
    
    // Return boolean when an element is wholly visible on screen
    function isWholeVisible( element ) { 
        var 
            viewPortHeight = $( window ).height(), // Viewport Height
            scrollTop = $( window ).scrollTop(), // Scroll Top
            currElementPosY = $( element ).offset().top,
            elementHeight = $( element ).height();
        
        return ( currElementPosY > scrollTop && currElementPosY + elementHeight < ( viewPortHeight + scrollTop ) );
    }
    
    // Animate chart only when you see it
    function animateChartWhenVisible ( chart ) {
        for ( var i = 0, count = chart.length; i < count; i++ ) {
            if ( isWholeVisible( chart[ i ] )  ) {
                $( chart[ i ] ).addClass("spon_p");
            }
        }
    }
    
    
    // On scroll
    $( window ).scroll( function () {  
        animateChartWhenVisible( charts );
    } );
       
    animateChartWhenVisible( charts );
    
} );
*/
