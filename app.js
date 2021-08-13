const navbar = document.querySelector("#navbar");
const burger_menu = document.querySelector("#burger_menu");
const sideMenu = document.querySelector("#side_menu");
const body = document.querySelector("body");

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

window.onload = function(){
    document.onclick = function(e){
        if(e.target.id == 'side_menu'){
            sideMenu.style.display = 'none';
        }
        if(e.target === burger_menu){
          sideMenu.style.display = 'block';
        }
    };
};

function displayMenu() {
  sideMenu.classList.toggle("display_menu");
}

function switchTheme() {
  body.classList.toggle("light_theme");
}


