const countdown = document.getElementById('countdown');
const allBtns = document.querySelector('#btns');
allBtns.addEventListener("click", counter);

let value = 0;


function counter(e) {
	const btn = e.target.id;
	console.log(btn);

	if(btn == "up") {
		value += 1;
		countdown.textContent = value;
	}else if(btn == "reset") {
		value = 0;
		countdown.textContent = value;
	}else if(btn == "down") {
		value -= 1;
		countdown.textContent = value;
	}
}

