let swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
//get attribute

/*let mydiv = document.querySelector('.swiper-slide-active');
let slideNext = document.querySelector('.swiper-slide-next');
let attrNext = slideNext.getAttribute('data-swiper-slide-index');
at=Number(attrNext)+1;
att=String(at);
let change = slideNext.setAttribute("data-swiper-slide-index", att);
slideNext.style=`position:relative;
left:25px`;
console.log(change);*/
