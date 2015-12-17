// Closes the Responsive Menu on Menu Item Click
//$(".navbar-collapse ul li a").click(function() {
//    $(".navbar-toggle:visible").click();
//});

//Click en menu
$(document).ready(main);

function main(){
    /*$(".menu a").click(function(){
        //$(".menu li>a").removeClass("active");
        $(this).addClass("active");
        
    });*/
    
    $(".menu li>a:last-child").click(function(){
        $(".menu li>a").removeClass("active");
        $(this).addClass("active");
        $(".banner").hide();
        $("#portfolio").hide();
        $(".about").hide();
        $(".main-content").hide();
        $("section").hide();
    });
    
    if("width"<=619px){
        alert("holaaa");
       $(".main-menu").removeClass(pull-right);
    }
    else{
        $(".main-menu").addClass(pull-right);
    }
    
}
