/* js xem thêm sản phẩm */
document.addEventListener("DOMContentLoaded", function() {
    var initialItems = 6;
    var loadMoreItems = 6;
    var itemsContainer = document.querySelector(".list-products");
    var items = itemsContainer.querySelectorAll(".item");
    var loadMoreButton = document.getElementById("loadMoreButton");
    var hiddenItems = Array.prototype.slice.call(items, initialItems);

    function showHiddenItems() {
        hiddenItems.forEach(function(item) {
            tem.style.display = "block";
        });
        hiddenItems = [];
        if (hiddenItems.length === 0) {
            loadMoreButton.style.display = "none";
        }
    }
    loadMoreButton.addEventListener("click", function() {
        var remainingItems = hiddenItems.slice(0, loadMoreItems);
        remainingItems.forEach(function(item) {
            item.style.display = "block";
        });
        hiddenItems = hiddenItems.slice(loadMoreItems);
        if (hiddenItems.length === 0) {
            loadMoreButton.style.display = "none";
        }
    });
    Array.prototype.slice.call(items, initialItems).forEach(function(item) {
        item.style.display = "none";
    });
    if (hiddenItems.length === 0) {
        loadMoreButton.style.display = "none";
    } else {
        loadMoreButton.style.display = "block";
    }
});