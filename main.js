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