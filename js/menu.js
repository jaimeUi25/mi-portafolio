document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener todos los elementos navbar-burger
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // 2. Escuchar el evento click en cada uno
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Obtener el objetivo indicado en el atributo data-target ("navMenu")
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Alternar la clase "is-active" en el burger y en el menú
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });

    // 3. Opcional: Cerrar el menú automáticamente al hacer clic en una opción (útil para Single Page Applications)
    const $menuItems = document.querySelectorAll('#navMenu .navbar-item, #navMenu .button');
    $menuItems.forEach(item => {
      item.addEventListener('click', () => {
        const $burger = document.querySelector('.navbar-burger');
        const $menu = document.getElementById('navMenu');
        
        $burger.classList.remove('is-active');
        $menu.classList.remove('is-active');
      });
    });
  });