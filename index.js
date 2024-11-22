
// Hamburger Menu Func
document.addEventListener("DOMContentLoaded", () => {
    const navBtn = document.getElementById('navToggle');
    const navCont = document.getElementById('navContent');
    const navBtnRm = document.getElementById('navToggleRm');
    navBtn.addEventListener('click', ()=> {
        navCont.classList.toggle("hidden");
    })
    navBtnRm.addEventListener('click', ()=> {
        navCont.classList.toggle("hidden");
    })
}) 

// download Resume/CV button Func
document.addEventListener("DOMContentLoaded", ()=> {
    const downloadBtn = document.getElementById('download').addEventListener (
        'click' , ()=> {
            const link = document.createElement('a')
            link.href = '/assets/test.txt';
            link.download = 'CV test.txt';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    )
}
)

