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
