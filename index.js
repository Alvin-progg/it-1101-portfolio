
// Hamburger Menu Func
document.addEventListener("DOMContentLoaded", () => {
    const navBtn = document.getElementById('navToggle')
    const navCont = document.getElementById('navContent')
    const navBtnRm = document.getElementById('navToggleRm')
    navBtn.addEventListener('click', ()=> {
        navCont.classList.toggle("hidden");
    })
    navBtnRm.addEventListener('click', ()=> {
        navCont.classList.toggle("hidden");
    })
}) 

