function changeLogo() {
    document.getElementById("logo").src = "arts/logo.gif";
}

function resetLogo() {
    document.getElementById("logo").src = "arts/logo.png";
}
function changeLogolower() {
    document.getElementById("logo").src = "/arts/logo.gif";
}

function resetLogolower() {
    document.getElementById("logo").src = "/arts/logo.png";
}
var z = 0;
$(document).ready(function() {
$(".arrow").on( "click", function() {
        $("#aktualnosci").slideToggle();
        if(z==0){
            $('#arrow'). animate(
                { deg: 90 },
                {
                duration: 120,
                step: function(now) {
                $(this). css({ transform: 'rotate(' + now + 'deg)' });
                z=1;
                }
            });
            
        }
        if(z==1){
            $('#arrow'). animate(
                { deg: -90 },
                {
                duration: 120,
                step: function(now) {
                $(this). css({ transform: 'rotate(' + now + 'deg)' });
                }
            });
            z=0;
        }
        
  } );
});