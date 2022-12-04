const header = document.querySelector('.header');
console.log(header);
// $(window).scroll(function() {
//   if ($(document).scrollTop() > 10) {
//       menu.classList.add("header__white");
//           } else {
//       menu.classList.remove("header__white");
//   }
// });

// window.scroll(
//   function() {
//     if (window.scrollTop() > 10) {
//       header.classList.add('header__white');
//     } else {
//       header.classList.remove('header__white')
//     }
//   }
// )


  // window.scroll(function () {
  //    if (window.scrollTop() > 50) {
  //       header.addClass('header__white')
  //    }
  //    if ($(this).scrollTop() < 50) {
  //       header.removeClass('header__white')
  //    }
  // });

  function changeColor() {
    header.classList.toggle('header__white', window.scrollY > 0);
  }

  window.addEventListener('scroll', changeColor);



// header.addEventListener('click', changeColor);
