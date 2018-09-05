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