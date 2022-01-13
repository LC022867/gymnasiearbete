const anime = [
    { name: 'attack on titan' },   /* KLAR */
    { name: 're zero' }, /* KLAR */
    { name: 'my hero academia' },/* KLAR */
    { name: 'naruto' },/* KLAR */
    { name: 'bleach' },/* KLAR */
    { name: 'seven deadly sins' },/* KLAR */
    { name: 'vinland saga' },/* KLAR */
    { name: 'bungou stray dogs' }, /* KLAR */
    { name: 'shield hero' },/* KLAR */
    { name: 'demon slayer' },/* KLAR */
    { name: 'one punch man' },/* KLAR */
    { name: 'hunter x hunter' },/* KLAR */
    { name: 'samurai champlo' },/* KLAR */
    { name: 'one piece' },/* KLAR */
    { name: 'jojos bizzare adventures' },/* KLAR */
    { name: 'baki' },/* KLAR */
    { name: 'jujutsu kaisen' },/* KLAR */
    { name: 'violet evergarden' },/* KLAR */
    { name: 'fire force' },/* KLAR */
    { name: 'tokyo revengers' },/* KLAR */
    { name: 'twin star exorcist' },/* KLAR */
    { name: 'fate stay night' },/* KLAR */
    { name: 'fate unlimited blade works' }, /* BYT ANIME HÄR */
    { name: 'love is war' },/* KLAR */
    { name: 'tower of god' },/* KLAR */
    { name: 'mob psycho' },/* KLAR */
    { name: 'haikyuu' },/* KLAR */
    { name: 'promised neverland' },/* KLAR */
    { name: 'sword art online' },/* KLAR */
    { name: 'the god of highschool' },
    { name: 'steins gate' },/* KLAR */
    { name: 'charlotte' },
    { name: 'dragon ball' },
    { name: 'dragon ball super' },
    { name: 'konosuba' },
    { name: 'assassination classroom' },
    { name: 'erased' },
    { name: 'bunny girl senpai' },
    { name: 'tokyo ghoul' },
    { name: 'dr stone' },
    { name: 'nisekoi' },
    { name: 'seraph of the end' },
    { name: 'cowboy bebop' },
    { name: 'death note' },
    { name: 'vivy' },
    { name: 'fullmetal alchemist' },
    { name: 'ragnarok' },
    { name: 'megalo box' },
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
    } else if (value.startsWith(searchTerm)) {
        return 1;
    } else if (value.includes(searchTerm)) {
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