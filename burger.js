(function () {
  
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
  
    function handleBurgerClick() {
      const burgerIcon = document.querySelector('.burger i');
      menu.classList.toggle('list-none');
      if(burgerIcon.classList.contains('fa-bars')) {
        burgerIcon.classList.remove('fa-bars');
        burgerIcon.classList.add('fa-times');
      } else {
        burgerIcon.classList.remove('fa-times');
        burgerIcon.classList.add('fa-bars');
      }
    }
  
    burger.addEventListener('click', handleBurgerClick);
  
  })();