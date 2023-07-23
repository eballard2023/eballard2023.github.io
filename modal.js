var modal = document.getElementById("myModal");
//get modal


//grabbing all modal components
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var caption = document.getElementById("caption");


img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    caption.innerHTML = this.alt;

}


//functionality to close modal when clicked
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

