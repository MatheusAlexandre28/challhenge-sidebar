const btn = document.querySelector('#open-sideBar');
const sideBar = document.querySelector('.sideBar');
const searchBtn = document.querySelector('.search');

btn.onclick = function() {
  sideBar.classList.toggle("active");
}

searchBtn.onclick = function() {
  sideBar.classList.toggle("active");
}



