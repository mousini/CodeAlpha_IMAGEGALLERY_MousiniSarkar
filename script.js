

function enlargeImage(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
