const btn = document.querySelector("#btn");
const header = document.querySelector(".header");
const input = document.querySelector("input");
btn.addEventListener("click",()=>{
	var htop = header.computedStyleMap().get('top').value;
	console.log(htop);
	if(htop == "-140"){
		header.style.top = "-10px";
	}else{
		header.style.top = "-140px";
	}
});