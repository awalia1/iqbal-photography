window.addEventListener('scroll', function(){
    var nav = document.getElementById('nav');
    var heroText = document.getElementById('hero-text');
    scrollTarget = 10;
    	if (window.scrollY > scrollTarget) {
            nav.classList.remove('hidden');
            heroText.classList.add('hidden');
  		} else {
            nav.classList.add('hidden');
            heroText.classList.remove('hidden');
        }
	})

function menuReveal(x) {
    x.classList.toggle("change");
    var menuItems = document.getElementById('menu-items');
    menuItems.classList.toggle("hidden");
}

var about = document.getElementById("about-text");
about.innerHTML = "Iqbal Photography is led by Asma Iqbal, who is armed with years of experience as a professional photographer. Asma's dedication to her craft is the reason why her ability to capture the moment and her subjects is unmatched across the industry. At Iqbal Photography, we specialize in all types of events from wedding, proposals to profiles and corporate events.";

function contactFunction() {
    var name =  document.forms["contactForm"]["name"];
    var email = document.forms["contactForm"]["mail"];
    var comment =  document.forms["contactForm"]["message"];

    alert('Your message has been sent. Thank you!');
    name.value = "";
    email.value = "";
    comment.value = "";
}