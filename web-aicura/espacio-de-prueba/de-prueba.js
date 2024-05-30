/* BARRA DE BUSQUEDA ANIMADA 1 - BOTON DE SEARCH */

/* const toggleSearch = () => {
    const searchForm = document.querySelector('.search-form');
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');

    searchButton.addEventListener('click', () => {
        searchForm.classList.toggle('active-search');
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchInput.value = '';
            searchForm.classList.remove('active-search');
        };
    });

}

toggleSearch(); */



/* BARRA DE BUSQUEDA ANIMADA 2 - BOTON DE SEARCH */
/* let search = document.querySelector('.search');
let clear = document.querySelector('.clear')

search.onclick = function() {
    document.querySelector('.container').classList.toggle('active');
} 

clear.onclick = function() {
    document.getElementById('search').value = '';
} */




/* BOTON DE BUSQUEDA - DROPDOWN DE LA BARRA DE BUSQUEDA */
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
}



/* OTRA OPCIÓN PARA EL CAMBIO DE ICONO DEL BOTON SEARCH DE LA BARRA DE BUSQUEDA (AICURA) */

/* Función para actualizar el ícono de búsqueda */
const updateSearchIcon = () => {
    const inputIsEmpty = searchInput.value.trim() === '';
    const iconIsActive = searchIcon.classList.contains('active');

    if (inputIsEmpty && iconIsActive) {
        changeIconSrc('./assets/icons/gray-search-icon.svg'); // Ícono gris
        searchIcon.classList.remove('active');
    } else if (!inputIsEmpty && !iconIsActive) {
        changeIconSrc('./assets/icons/black-search-icon.svg'); // Ícono negro
        searchIcon.classList.add('active');
    }
};

/* Función para cambiar el src del ícono con transición */
const changeIconSrc = (newSrc) => {
    searchIcon.classList.add('transitioning');
    setTimeout(() => {
        searchIcon.src = newSrc;
        searchIcon.classList.remove('transitioning');
    }, 300); // Tiempo de transición en milisegundos
};
/* ------------------------------------ */