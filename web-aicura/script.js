const search = document.getElementById('dropdownSearchMenu'),
    searchBtn = document.getElementById('searchBtn'),
    searchClearBtn = document.getElementById('clearBtn'),
    searchCloseBtn = document.getElementById('closeBtn'),
    searchInput = document.getElementById('searchInput'),
    searchIcon = document.querySelector('.search-icon img');


/* Mostrar el earch */
searchBtn.addEventListener('click', (/* event */) => {
    /* event.preventDefault(); */
    search.classList.add('show-search')
});

/* Esconder el search */
searchCloseBtn.addEventListener('click', () => {
    search.classList.remove('show-search')
});


/* Resetear o borrar lo escrito en el search input */
searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
})


/* Cambiar el ícono de búsqueda cuando el usuario tipee */
searchInput.addEventListener('input', () => {
    console.log('Input event detected');
    updateSearchIcon();
});

/* Función para actualizar el ícono de búsqueda */
const updateSearchIcon = () => {
    if (searchInput.value.trim() === '') {
        searchIcon.src = './assets/icons/gray-search-icon.svg';
    } else {
        searchIcon.src = './assets/icons/black-search-icon.svg';
    }
}



/* Próxima modificaci[on: Agregarle una transición al cambio de color de los iconos */