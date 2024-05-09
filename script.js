const bar = document.querySelector(".bar");
const navSide = document.querySelector(".navigationMenu");
const closeSideBar = document.querySelector(".closeSideBar");

if(bar){
    bar.addEventListener("click", () => {
        navSide.classList.add("openSideBar");
    })
}

if(closeSideBar){
    closeSideBar.addEventListener("click", () => {
        navSide.classList.remove("openSideBar");
    })
} 