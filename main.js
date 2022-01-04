document.addEventListener("click",function (e){
if(e.target.classList.contains("galeriaItem")){
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(document.getElementById('galeriaZoom'));
    myModal.show();
}
})