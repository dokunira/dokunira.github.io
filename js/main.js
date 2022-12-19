'use strict';

{
  const menu = document.getElementById('menu');
  const menu_list = document.getElementById('menu_list');
  const close = document.getElementById('close');

  menu.addEventListener('click', () => {
    menu_list.classList.add('show');
    menu.classList.add('hide');
    close.classList.add('show');
  });
  
  close.addEventListener('click', () => {
    menu_list.classList.remove('show');
    menu.classList.remove('hide');
    close.classList.remove('show');
  });

  var windowSize = window.innerWidth;

  if (windowSize > 720) {
    close.click();
  }
}