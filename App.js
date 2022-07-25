const primaryNav = document.querySelector(".ul");
const navToggle = document.querySelector(".hamburger");

navToggle.addEventListener('click', () =>{ 
    const visibility = primaryNav.getAttribute("data-visible");

    if(visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
    }
    else if (visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
    }
})