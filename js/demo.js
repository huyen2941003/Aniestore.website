var video = document.getElementById('video-background');
video.play();

document.addEventListener("DOMContentLoaded", function() {
    const searchLi = document.getElementById("search-li");
    const searchBox = document.getElementById("search-box");
    const searchButton = document.getElementById("search-button");
    searchLi.addEventListener("click", function() {
    if (searchBox.style.display === "none") {
        searchBox.style.display = "block";
    } else {
        searchBox.style.display = "none";
    }
    });

    searchButton.addEventListener("click", function() {
        searchBox.style.display = "none";
    });
});