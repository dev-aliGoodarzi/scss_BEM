const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    width: '300',
    loop: true,
    speed: 400,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
        nextEl: '#next',
        prevEl: '#prev',
    },
});
