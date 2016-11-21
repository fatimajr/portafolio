  var cargarPagina = function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   
   $("span#bar").click(iconShow);
   $(".line").click(menuHidden);
    
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  $('.modal').modal();
  };
          
  var iconShow = function(){
	if($(this).attr('data-click-state') == 1) {
		$(this).attr('data-click-state', 0)
		$(this).removeClass("icon-th-menu-outline");
		$(this).addClass("icon-cross");
		$("#open").removeClass("close").addClass("open");
	} else {
		$(this).attr('data-click-state', 1)
		$(this).removeClass("icon-cross");
		$(this).addClass("icon-th-menu-outline");
		$("#open").removeClass("open").addClass("close");
	}
};

var menuHidden = function(){
  setTimeout(function() { 
    $("#open").addClass("close"); 
    $("span#bar").removeClass("icon-cross").addClass("icon-th-menu-outline");
}, 900);
 
 
}
$(document).ready(cargarPagina);