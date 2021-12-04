var imgBox = document.getElementById("img-box");
var img = document.getElementById("img");

function openImage(source) {
    imgBox.style.display = "flex";
    img.src = source;
}

function closeImage() {
    imgBox.style.display = "none";
}
