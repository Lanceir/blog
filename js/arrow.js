    function headertop_down () {
		var coverOffset = $('#content').offset().top
		$('html,body').animate({
    		scrollTop: coverOffset
		}, 600)
	}

var div = document.getElementsByClassName("headertop")[0];

var down = document.createElement("div");  
down.setAttribute('class', 'headertop-down faa-float animated'); 
down.setAttribute('onclick', 'headertop_down()');  
var i = document.createElement("i");
i.setAttribute('class', 'fa fa-chevron-down'); 
i.setAttribute('aria-hidden', 'true'); 
var span = document.createElement("span");
span.appendChild(i);
down.appendChild(span);

div.appendChild(down);
  
