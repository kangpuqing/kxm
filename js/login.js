var placeh=document.querySelector("#placeh"),
phone=document.querySelector("#phone"),
phoneinput=phone.querySelector("input");

phoneinput.addEventListener("focus",function(){
	placeh.style.display="none";
})
phoneinput.addEventListener("blur",function(){
	placeh.style.display="flex";
})
