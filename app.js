const navbar = document.querySelector("#navbar");

window.addEventListener('scroll', () => {

    const { scrollTop, scrollHeight, clientHeight} =
    document.documentElement;

    if (scrollTop > 50) {
        navbar.classList.add("nav_transition_in");
        navbar.classList.remove("nav_transition_out")
    } else {
        navbar.classList.remove("nav_transition_in");
        navbar.classList.add("nav_transition_out")
    }


})