window.addEventListener("scroll", () => {
    let content = document.querySelectorAll(".scroll-anim");
    for (let i = 0; i < content.length; i++) {
         let contentPosition = content[i].getBoundingClientRect().top;
         let screenPosition = window.innerHeight;
        if (contentPosition * 1.25 < screenPosition) {
            content[i].classList.add('scroll-anim-active')
        }
        else {
            content[i].classList.remove('scroll-anim-active')
        }
    }
});
