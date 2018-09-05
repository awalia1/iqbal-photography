window.addEventListener('scroll', function(){
    var nav = document.getElementById('nav');
    var heroText = document.getElementById('hero-text');
    scrollTarget = 10;
    	if (window.scrollY > scrollTarget) {
            nav.classList.remove('invisible');
            // heroText.classList.add('invisible');
  		} else {
            nav.classList.add('invisible');
            // heroText.classList.remove('invisible');
        }
	})

var menuItems = document.getElementById('menu-items');

function menuReveal() {
    menuItems.classList.toggle("hidden");
}

function hideMenu() {
    menuItems.classList.add("hidden");
}

var ArrayOfImages = [
    'images/bench-kid.JPG',
    'images/proposal(1).JPG',
    'images/proposal(2).JPG',
    'images/proposal(3).JPG',
    'images/proposal(4).JPG',
    'images/proposal(5).JPG',
    'images/proposal(6).JPG',
    'images/kid.JPG',
    'images/kid(2).JPG',
    'images/kid(3).JPG',
    'images/pumpkin-girl.JPG',
    'images/flower-girl.JPG',
    'images/flowers.JPG',
    'images/city-guy.JPG',
    'images/city-guy(2).JPG',
    'images/bw-city.JPG',
    'images/bw-city(2).JPG',
    'images/bw-city(3).JPG',
    'images/city-sea.JPG',
    'images/sunset-city.JPG',
    'images/sunset-water.JPG',
    'images/graffiti.JPG',
    'images/graffiti(2).JPG',
    'images/graffiti(3).JPG',
    'images/hands.jpg',
    'images/hero-image.JPG',
    'images/hero-image-mobile.JPG', 
    'images/mobile-gallery.JPG'
];

ArrayOfImages.forEach(function(image){
var img = document.createElement('img');
img.src = image;
document.getElementById('bg-gallery').appendChild(img);
});