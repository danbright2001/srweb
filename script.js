const navMenu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#menu__btn");
const closeBtn = document.querySelector("#close__btn");


menuBtn.addEventListener('click', (collapat) => {
    navMenu.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
})
closeBtn.addEventListener('click', () => {
    navMenu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
})

const menuItems = navMenu.querySelectorAll("a");
if(window.innerWidth < 1024) {
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            navMenu.style.display = "none";
            menuBtn.style.display = "inline-block";
            closeBtn.style.display = "none";
        })
    })
}

const faqs = document.querySelectorAll (".faqs");
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle("open");

        // change the icon
        const icon = faqs.querySelector(".faqs__icon i");
        if(icon.className === "fa-solid fa-plus") {
            icon.className === "fa-solid fa-minus";
        } else {
            icon.className === "fa-solid fa-plus";
        }
    })
})
