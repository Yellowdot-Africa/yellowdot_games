const menuBtn = document.querySelector('.myMenuBtn');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.closebtn');
const sideNavbar = document.getElementById("mySidenav")
const pageContainer = document.getElementById("main")

 menuBtn.addEventListener('click', ()=>{
    sideNavbar.style.right = "0"
    overlay.classList.remove('hidden');

 })

 closeBtn.addEventListener('click', ()=>{
  sideNavbar.style.right = "-1000px"
  pageContainer.style.backgroundColor = "#ßFFCB05"
  overlay.classList.add('hidden');
})