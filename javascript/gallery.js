var ArrayOfImages = [
    'images/graffiti(3).JPG',
    'images/proposal(1).JPG',
    'images/proposal(3).JPG',
    'images/graffiti(2).JPG',
    'images/proposal(5).JPG',
    'images/proposal(6).JPG',
    'images/kid.JPG',
    'images/proposal(6).JPG',
    'images/flower-girl.JPG',
    'images/proposal(2).JPG',
    'images/flowers.JPG',
    'images/bw-city(3).JPG',
    'images/city-guy.JPG',
    'images/bw-city.JPG',
    'images/proposal(4).JPG',
    'images/bw-city(2).JPG',
    'images/city-sea.JPG',
    'images/sunset-city.JPG',
    'images/graffiti.JPG',
    'images/kid(2).JPG',
    'images/bench-kid.JPG',
    'images/kid(3).JPG',
    'images/hands.jpg',
    'images/pumpkin-girl.jpg',
    'images/hero-image.JPG',
    'images/hero-image-mobile.JPG', 
    'images/mobile-gallery.JPG'
];

var modal = document.getElementById('myModal');
// var img = document.createElement('img');

ArrayOfImages.forEach(function(image){
    var img = document.createElement('img');
    img.src = image;
    document.getElementById('official-gallery').appendChild(img);
    img.onclick = function() {
        modal.style.display = "block";
        // img.classList.add("modal");
        modal.appendChild(this);
    };
    
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";

}

// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         document.body.style.backgroundColor = "yellow";
//     } else {
//         document.body.style.backgroundColor = "pink";
//     }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes


