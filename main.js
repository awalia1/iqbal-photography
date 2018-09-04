console.log("i'm here");

var nav = document.getElementById('nav');

window.addEventListener('scroll', function(){
    scrollTarget = 5;
    	if (window.scrollY > scrollTarget) {
    		nav.classList.remove('hidden');
  		}
	})

function menuReveal(x) {
    x.classList.toggle("change");
    var menuItems = document.getElementById('menu-items');
    menuItems.classList.toggle("hidden");
}