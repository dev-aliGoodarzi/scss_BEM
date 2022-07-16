const starElements = document.querySelectorAll('.star.rating');
starElements.forEach(star => {
    star.addEventListener('click', function (e) {
        let starEl = e.currentTarget;
        console.log(starEl.parentNode)
        starEl.parentNode.setAttribute('data-stars', starEl.dataset.rating);
    });
})