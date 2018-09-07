var about = document.getElementById("about-text");
about.innerHTML = "Iqbal Photography is led by Asma Iqbal, who is armed with years of experience as a professional photographer. Asma's dedication to her craft is the reason why her ability to capture the moment and her subjects is unmatched across the industry. At Iqbal Photography, we specialize in all types of events from wedding, proposals to profiles and corporate events.";

var contactInfo = document.getElementById("contact-info-desktop");
contactInfo.innerHTML = "We offer a wide range of different packages for all types of events. If you want the moment to be captured so you can have a reminder of it forever, we'll be there!";

function contactFunction() {
    var name =  document.forms["contactForm"]["name"];
    var email = document.forms["contactForm"]["mail"];
    var comment =  document.forms["contactForm"]["message"];

    alert('Your message has been sent. Thank you!');
    name.value = "";
    email.value = "";
    comment.value = "";
}

imgArray = [
    // 'images/slide-kid.JPG',
    'images/slide-kid(2).JPG',
    'images/slide-kid(3).JPG'
];

var gallery = document.getElementById("gallery")

imgArray.forEach(function(image){
    var img = document.createElement('img');
    img.className = "mySlides";
    img.src = image;
    document.getElementById('slideshowImg').appendChild(img);
});

var myIndex = 0;
carousel();


function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
