window.addEventListener('scroll', function(){
    var nav = document.getElementById('nav');
    var heroText = document.getElementById('hero-text');
    scrollTarget = 10;
    	if (window.scrollY > scrollTarget) {
            nav.classList.remove("invisible");
  		} else {
            nav.classList.add("invisible");
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
