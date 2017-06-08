$(document).ready(function(){
    $(".all").click(function(){
        $(".nlp, .fullstack, .frontend").show();
    });

    $(".so-frontend").click(function(){
        $(".nlp, .fullstack").hide();
        $(".frontend").show();
    });

    $(".so-nlp").click(function(){
        $(".frontend, .fullstack").hide();
        $(".nlp").show();
    });

  $(".so-fullstack").click(function(){
        $(".frontend, .nlp").hide();
        $(".fullstack").show();
    });
});
