$(document).ready(function(){
    $(".all").click(function(){
        $(".nlp, .fullstack, .frontend").show();
    });

    $(".so-frontend").click(function(){
        $(".nlp, .fullstack").fadeOut(200);
        $(".frontend").show();
    });

    $(".so-nlp").click(function(){
        $(".frontend, .fullstack").fadeOut(200);
        $(".nlp").show();
    });

  $(".so-fullstack").click(function(){
        $(".frontend, .nlp").fadeOut(200);
        $(".fullstack").show();
    });
});
