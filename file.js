

const display = document.getElementById("display");
const ret = document.getElementById("ret");


function hapus(){
	display.innerHTML = "0";
	ret.innerHTML = "0";
	// calculate();
}

function calculate(){
	 ret.innerHTML = eval(display.innerHTML);
	 // console.log(display.innerHTML)
}
function adding(num){
	if(display.innerHTML == 0){
		display.innerHTML = num;
		calculate()
	}else {
		display.innerHTML += num;
		calculate();
	}
}
function equals(){
	display.innerHTML = ret.innerHTML;
	ret.innerHTML = "0";
}
function del(){
	var uy = display.innerHTML;
	display.innerHTML = uy.slice(0,uy.length-1);
	if(display.innerHTML == ""){
		display.innerHTML = "0";
	}
	calculate();
}
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
