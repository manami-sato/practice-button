const btn = document.querySelector(".btn");
const bSwitch = document.querySelector(".switch");
let count = 0;
btn.addEventListener("click",()=>{
	count++;
	if(count%2==!0){
		btn.setAttribute("id","btnAdd");
		bSwitch.setAttribute("id","switchAdd");
	}if(count%2==0){
		btn.removeAttribute("id");
		bSwitch.removeAttribute("id");
	}
});