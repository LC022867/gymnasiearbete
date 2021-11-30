const anime = [
    { name: 'attack on titan' },
    { name: 're:zero' },
    { name: 'my hero academia' },
    { name: 'naruto' },
    { name: 'bleach' },
    { name: 'seven deadly sins' },
    { name: 'baki' }
];

const list = document.getElementById('list');

function setList(group) {
    clearList();
    for (const series of group) {
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode(series.name);
        item.appendChild(text);
        list.appendChild(item);
    }
    if (group.length === 0) {
        setNoResults();
    }
}

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function setNoResults() {
    const item = document.createElement('li');
item.classList.add('list-group-item');
    const text = document.TextNode('No results found');
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy(value, searchTerm) {
    if (value === searchTerm) {
        return 2;
    } else if (value.startWith(searchTerm)) {
        return 1;
    } else if (value.includes(searchTerm)){
        return 0;
    }
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(anime.filter(animeName => {
            return animeName.name.includes(value);
        }).sort((animeA, animeB) => {
            return getRelevancy(animeB.name, value) - getRelevancy(animeA.name, value);
        }));
    } else {
        clearList();
    }
})