console.log("i'm here");

var nav = document.getElementById('nav');

// window.addEventListener('scroll', function(){
//     scrollTarget = 0;
//     	if (window.scrollY > scrollTarget) {
//     		nav.classList.remove('hidden');
//   		}
// 	})

function menuReveal(x) {
    x.classList.toggle("change");
}