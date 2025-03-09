document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector("#productCarousel");
    let touchStartX = 0;
    let touchEndX = 0;

    if (carousel) {
        carousel.addEventListener("touchstart", function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });

        carousel.addEventListener("touchend", function(e) {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                document.querySelector("#productCarousel .carousel-control-next").click();
            } else if (touchEndX - touchStartX > 50) {
                document.querySelector("#productCarousel .carousel-control-prev").click();
            }
        });
    }
});
