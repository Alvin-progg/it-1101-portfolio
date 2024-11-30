
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
//  Contact Message func
async function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('http://localhost:5000/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message }),
        });
        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send email.');
    }
}

