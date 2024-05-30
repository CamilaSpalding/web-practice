const search = document.getElementById('dropdownSearchMenu'),
    searchBtn = document.getElementById('searchBtn'),
    searchClearBtn = document.getElementById('clearBtn'),
    searchCloseBtn = document.getElementById('closeBtn');

/* Search show */
searchBtn.addEventListener('click', (/* event */) => {
    /* event.preventDefault(); */
    search.classList.add('show-search')
});

/* Search hidden */
searchCloseBtn.addEventListener('click', () => {
    search.classList.remove('show-search')
});