

const display = document.getElementById("display"),
	ret = document.getElementById("ret"),
	modal = document.getElementById('modal'),
	info = document.getElementById('info'),
	modalCancel = document.getElementById('modal-cancel');


/**
 * Btn Modal
 */

modalCancel.addEventListener('click',function(){
	modal.style.display = 'none';
});

info.addEventListener('click',function(){
	modal.style.display = 'block';
});
/**
 * End Modal
 */


// clear window
function hapus(){
	display.innerHTML = "0";
	ret.innerHTML = "";
}

// calculating function
function calculate(){
	ret.innerHTML = eval(display.innerHTML);
	 // console.log(display.innerHTML)
}

// add to display
function adding(num){
	if(display.innerHTML == 0){
		if(num == "/" || num == "+" || num == "-" || num == "*"){
			alert('Error');
		}else{
			display.innerHTML = num;
		}
	}else {
		inp = display.innerHTML.slice(display.innerHTML.length - 1, display.innerHTML.length);
		
		if ((inp == "+" || inp == "/" || inp == "-" || inp == "*") && (num == "/" || num == "+" || num == "-" || num == "*")) {
			alert('Operator ganda !!');
		}else{
			
			display.innerHTML += num;
		}
	}
}

// show result from calculate()
function equals(){
	calculate();
	display.innerHTML = ret.innerHTML;
	ret.innerHTML = "";
}

function del(){
	var uy = display.innerHTML;
	display.innerHTML = uy.slice(0,uy.length-1);
	if(display.innerHTML == ""){
		display.innerHTML = "0";
	}
}
