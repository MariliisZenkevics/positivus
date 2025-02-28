let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;

burgerBtn.onclick = function () {
    if (!isBurgerOpen) {
        burgerMenu.style.display = "block";
        burgerBtn.style.backgroundPosition = "center left 50px, center";
        isBurgerOpen = true;
    }
    else if (isBurgerOpen) {
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = "center, center left 50px";
        isBurgerOpen = false;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const processItems = document.querySelectorAll(".process-item");

    processItems.forEach((item) => {
        const header = item.querySelector(".process-header");
        const icon = item.querySelector(".icon img");
        const content = item.querySelector(".process-content");

        header.addEventListener("click", function () {
            const isActive = item.classList.contains("active");

            processItems.forEach((el) => {
                el.classList.remove("active");
                el.querySelector(".icon img").src = "images/icons/Plus-icon-process.png"; // Reset icon to "+"
                el.querySelector(".process-content").style.maxHeight = "0";
            });

            if (!isActive) {
                item.classList.add("active");
                icon.src = "images/icons/Minus-icon-process.png"; 
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const slider = document.querySelector(".testimonial-slider");
    const dots = document.querySelectorAll(".dot");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    rightArrow.addEventListener("click", function () {
        if (currentIndex < testimonials.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });

    leftArrow.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = testimonials.length - 1;
        }
        updateSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            currentIndex = index;
            updateSlider();
        });
    });

    // Auto Slide Every 5 Seconds
    setInterval(() => {
        if (currentIndex < testimonials.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }, 5000);
});