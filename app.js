const navbar = document.querySelector("#navbar");
const sideMenu = document.querySelector("#side_menu");
const body = document.querySelector("body");

console.log(body);

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop > 50) {
    navbar.classList.add("nav_transition_in");
    navbar.classList.remove("nav_transition_out");
  } else {
    navbar.classList.remove("nav_transition_in");
    navbar.classList.add("nav_transition_out");
  }
});

function hide() {
  sideMenu.classList.add("hide");
  console.log("xd");
}

function switchTheme() {
  body.classList.toggle("light_theme");
}
