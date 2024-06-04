/* SCRIPT PARA LA BARRA DE BUSQUEDA/SEARCH */

const search = document.getElementById('dropdownSearchMenu')
const searchBtn = document.getElementById('searchBtn')
const searchClearBtn = document.getElementById('clearBtn')
const searchCloseBtn = document.getElementById('searchCloseBtn')
const searchInput = document.getElementById('searchInput')
const searchIcon = document.querySelector('.search-icon img')


/* Mostrar el search */
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
    updateSearchUI(); // Actualiza la interfaz de búsqueda
})


/* Cambia el ícono de búsqueda cuando el usuario tipee */
searchInput.addEventListener('input', () => {
    updateSearchUI(); // Actualiza la interfaz de búsqueda

});


/* Función para actualizar el ícono de búsqueda */
const updateSearchUI  = () => {
    if (searchInput.value.trim() === '') {
        searchIcon.src = './assets/icons/gray-search-icon.svg'; // Ícono gris
        inputSearchBtn.disabled = true; // Desactiva el botón si el input está vacío
    } else {
        searchIcon.src = './assets/icons/black-search-icon.svg'; // Ícono negro
        inputSearchBtn.disabled = false; // Activa el botón si hay texto en el input
    }
};

/* Función para actualizar el estado del botón de búsqueda */
const updateSearchButton = () => {
    if (searchInput.value.trim() === '') {
        inputSearchBtn.disabled = true; // Desactiva el botón si el input está vacío
    } else {
        inputSearchBtn.disabled = false; // Activa el botón si hay texto en el input
    }
};

/* Inicializa el estado del botón de búsqueda al cargar la página */
updateSearchUI();
/* =================================== */



/* SCRIPT PARA LA PÁGINA DE LOG IN */
const logIn = document.getElementById('logIn')
const logInBtn = document.getElementById('logInBtn')
const logInCloseBtn = document.getElementById('logInFormCloseBtn')


/* Mostrar el login */
logInBtn.addEventListener('click', () => {
    logIn.classList.add('show-log-in');
});

/* Esconder el login */
logInCloseBtn.addEventListener('click', () => {
    logIn.classList.remove('show-log-in');
});
/* =================================== */




/* SCRIPT PARA EL ENVÍO DEL FORMULARIO DE CONTACTO */

/* =================================== */




/* SCRIPT PARA LOS VALORES INVALIDOS EN EL FORMULARIO DE CONTACTO */

/* =================================== */
