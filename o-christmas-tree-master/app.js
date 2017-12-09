function drag(event) {
	event.dataTransfer.setData('text', event.target.id);
}
function allowDrop(event) {
	event.preventDefault()
}
function drop(event) {
	var data = event.dataTransfer.getData('text')
	event.target.appendChild(document.getElementById(data))
}
var gift1 = document.getElementById("other1")
var gift2 = document.getElementById("other2")
var gift3 = document.getElementById("other3")

gift1.addEventListener("click",function(){
	gift1.src = "assets/YIAY.jpg"
})
gift2.addEventListener("click",function(){
	gift2.src = "assets/mario.jpg"
})
gift3.addEventListener("click",function(){
	gift3.src = "assets/money.jpg"
})