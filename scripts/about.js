const hiddenText = document.querySelector("#hidden-text")
const moreInfo = document.querySelector("#more-infoBtn")

moreInfo.addEventListener('click', function () {
    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
        moreInfo.innerHTML= "Less info";
    } else {
        hiddenText.style.display = "none";
        moreInfo.innerHTML= "More info";
    }
})