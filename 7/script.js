
    let menuIcon = document.querySelector('.fa-bars');
    let menuContainers = document.querySelector('.menu-container');
    let notiContainers = document.querySelector('.noti-container');

    let search = document.querySelector('.fa-magnifying-glass');
    let searchBar = document.querySelector('#search')

    menuIcon.addEventListener('click', () => {
        console.log('clicked');
        menuContainers.classList.toggle('active');
        notiContainers.classList.toggle('active');
    });

    search.addEventListener('click', () => {
        console.log('click')
        searchBar.classList.toggle('active');
    });
