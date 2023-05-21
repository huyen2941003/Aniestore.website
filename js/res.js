var menuIcon = document.querySelector('#menu-icon');
var userList = document.querySelector('.user-list');
var searchIcon = document.querySelector('#search-icon');
var shopping = document.querySelector('.shopping');
var headerNav = document.querySelector('.header');
// Xử lý sự kiện click trên menu
menuIcon.addEventListener('click', function() {
   userList.classList.toggle('hiden')
   searchIcon.classList.toggle('hiden')
   shopping.classList.toggle('hiden')
   menuIcon.classList.toggle('hiden')
   headerNav.classList.toggle('show');
})