const hambeugerMenuBtn = document.getElementById('hambeugerMenu')
const hambeugerMenuContainer = document.getElementById("hamburgerMenuContainer")
document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 400) {
        hambeugerMenuContainer.style.display = "none";
        document.getElementById("header-items").style.display = "none";
        return
    }
    else {
        hambeugerMenuBtn.style.display = 'none'
    }
})

const swiper = new Swiper('.swiper', {
    direction: (window.innerWidth < 400 ? 'horizontal' : "vertical"),
    width: '300',
    loop: true,
    speed: 400,
    spaceBetween: 20,
    navigation: {
        nextEl: '#next',
        prevEl: '#prev',
    },
});
