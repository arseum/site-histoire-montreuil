position = 1;

function changeLeft(){
    if (window.position == 1){
        document.getElementById("titreC").innerHTML="RAPIDE";
        document.getElementById("paraC").innerHTML="pas de panique ! découvrir l'histoire ne te prendra seulement 1h30 hé oui rapide n'est-ce pas?";
        window.position = 5;
    }else if (window.position == 2){
        document.getElementById("titreC").innerHTML="EFFICACE";
        document.getElementById("paraC").innerHTML="qui dit rapide dit efficace !nous avons fait le choix des meilleurs et des plus beaux (évidement)lieux culte de l'histoire.";
        window.position = 1;
    }else if (window.position == 3){
        document.getElementById("titreC").innerHTML="AUCUN EFFORT";
        document.getElementById("paraC").innerHTML="si marcher dans la rue et prendre des magnifique photo est fatiguant ca se serait !";
        window.position = 2;
    }else if (window.position == 4){
        document.getElementById("titreC").innerHTML="DIVERTISSANT";
        document.getElementById("paraC").innerHTML="entre nous une petite balade pour ta culture de temps en temps ca ne tue pas .et en plus s'a t'occupe et te divertie";
        window.position = 3;
    }else if (window.position == 5){
        document.getElementById("titreC").innerHTML="GRATUIT !";
        document.getElementById("paraC").innerHTML="dans se monde ou tout se paye quoi de mieux qu'une sortie gratuite !enrichie ta culture gratuitement en cliquant ici .";
        window.position = 4;
    }
}

function changeRight(){
    if (window.position == 1){
        document.getElementById("titreC").innerHTML="RAPIDE";
        document.getElementById("paraC").innerHTML="pas de panique ! découvrir l'histoire ne te prendra seulement 1h30 hé oui rapide n'est-ce pas?";
        window.position = 2;
    }else if (window.position == 2){
        document.getElementById("titreC").innerHTML="EFFICACE";
        document.getElementById("paraC").innerHTML="qui dit rapide dit efficace !nous avons fait le choix des meilleurs et des plus beaux (évidement)lieux culte de l'histoire.";
        window.position = 3;
    }else if (window.position == 3){
        document.getElementById("titreC").innerHTML="AUCUN EFFORT";
        document.getElementById("paraC").innerHTML="si marcher dans la rue et prendre des magnifique photo est fatiguant ca se serait !";
        window.position = 4;
    }else if (window.position == 4){
        document.getElementById("titreC").innerHTML="DIVERTISSANT";
        document.getElementById("paraC").innerHTML="entre nous une petite balade pour ta culture de temps en temps ca ne tue pas .et en plus s'a t'occupe et te divertie";
        window.position = 5;
    }else if (window.position == 5){
        document.getElementById("titreC").innerHTML="GRATUIT !";
        document.getElementById("paraC").innerHTML="dans se monde ou tout se paye quoi de mieux qu'une sortie gratuite !enrichie ta culture gratuitement en cliquant ici .";
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
