const trigger = document.querySelector('.res-btn');
const nav = document.querySelector('.nav-items');

trigger.addEventListener('click', () => {
  nav.classList.toggle('active');
})

var i = 0;
		var tag = document.getElementById("text");
		var html = document.getElementById("text").innerHTML;
		var attr = tag.setAttribute("data", html);
		var txt = tag.getAttribute("data");
		var speed = 120;

		function typeWriter() {
		  if (i <= txt.length) {
		    document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
		    i++;
		    setTimeout(typeWriter, speed);
		  }
		}

typeWriter();


document.getElementById("nav-tugas").onclick = function() {
  document.getElementById("tugas").style.display = "block";
  document.getElementById("tugas").style.transition = "1s" ;
}

  document.getElementById("ex").onclick = function() {
  document.getElementById("tugas").style.display = "none";
}





