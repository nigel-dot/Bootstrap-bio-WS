const pic = document.querySelector(".profilePic");
console.log(pic);
function toggleRotate() {
	pic.classList.toggle("rotatePic");
	console.log("image clicked", pic);
}
pic.addEventListener("click", toggleRotate);
