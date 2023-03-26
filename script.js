var fontsize=document.getElementById("fontsize")
var fontcolor=document.getElementById("fontcolor")

var myCookies=document.cookie.split("; ")

myCookies.map((item)=>{
	var cookielist=item.split("=")
})

function onSubmit(event){
	document.cookie=`fontsize=${fontsize.value}`
	document.cookie=`fontcolor=${fontcolor.value}`
	event.preventDefault();
}