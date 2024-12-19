let sections = document.querySelectorAll('section');
let navbar = document.querySelectorAll('header navbar a');
window.onscroll=()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navbar.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        }
    });
}