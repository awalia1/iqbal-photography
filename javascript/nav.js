window.addEventListener('scroll', function(){
    var nav = document.getElementById('nav');
    var heroText = document.getElementById('hero-text');
    scrollTarget = 10;
    	if (window.scrollY > scrollTarget) {
            nav.style.opacity = "1";
  		} else {
            nav.style.opacity = "0";
        }
	})

var menuItems = document.getElementById('menu-items');

function menuReveal() {
    if (menuItems.style.display === "none") {
        menuItems.style.display = "block";
    } else {
        menuItems.style.display = "none";
    }
}

function hideMenu() {
    menuItems.style.display = "none";
}
