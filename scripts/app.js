const hambeugerMenuBtn = document.getElementById('hambeugerMenuBtn')
const hambeugerMenuContainer = document.getElementById("hamburgerMenuContainer")
const hamburgerMenuLinksMasterContainer = document.getElementById("ham_linksMaster")
const hamburgerMenuLinksContainer = [...document.getElementById("ham_links_container").children]
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    width: window.innerWidth < 400 ? window.innerWidth - 10 : '300',
    loop: true,
    speed: 400,
    spaceBetween: 20,
    navigation: {
        nextEl: '#next',
        prevEl: '#prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 400) {
        document.getElementById("header-items").style.display = "none";
        return
    }
    else {
        hambeugerMenuContainer.style.display = "none";
        hambeugerMenuBtn.style.display = 'none'
    }
})

function modifier(id) {
    const selectedItem = document.getElementById(id)
    hamburgerMenuLinksContainer.forEach((item) => {
        item.classList.remove('active')
    })
    selectedItem.classList.add("active")
    return
}



hambeugerMenuBtn.addEventListener("click", () => {
    hambeugerMenuContainer.style.opacity = 1;
    hambeugerMenuContainer.style.visibility = "visible"
    hambeugerMenuContainer.style.zIndex = 50;
    setTimeout(() => {
        hamburgerMenuLinksMasterContainer.style.opacity = 1;
        hamburgerMenuLinksMasterContainer.style.visibility = "visible";
        hamburgerMenuLinksMasterContainer.style.left = 0;
    }, 200)
})

hambeugerMenuContainer.addEventListener("click", () => {
    hamburgerMenuLinksMasterContainer.style.left = "-80%";
    setTimeout(() => {
        hambeugerMenuContainer.style.opacity = 0;
        hambeugerMenuContainer.style.visibility = "hidden";
        hambeugerMenuContainer.style.zIndex = 0;
    }, 500)
})