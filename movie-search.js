const movie = [
    { name: 'spiderman' },   
    { name: 'intersteller' }, 
    { name: 'the godfather' },
    { name: 'john wick' },
    { name: 'scream (2022)' },
    { name: 'shaolin soccer' },
    { name: 'kingsman: the secret service' },
    { name: 'django unchained' }, 
    { name: 'eternals' },
    { name: 'titanic' },
    { name: 'the matrix' },
    { name: 'enchanto' },
    { name: 'joker' },
    { name: 'avatar' },
    { name: 'the karate kid' },
    { name: '1917' },
    { name: 'avengers: infinity war' },
    { name: 'ratatouille' },
    { name: 'the lion king' },
    { name: 'black panther' },
    { name: 'xmen origins: wolverine' },
    { name: 'harry potter' },
    { name: 'rambo first blood' },
    { name: 'godzilla vs kong' },
    { name: 'tower of god' },
    { name: 'candyman' },
    { name: 'welcome to the jungle' },
    { name: 'rush hour' },
    { name: 'vanguard' },
    { name: 'annabelle'},
    { name: 'deadpool' },
    { name: 'men in black' },
    { name: 'suicide squad' }, 
    { name: 'the martian' }, 
    { name: 'saw 2004' },
    { name: 'skyfall' },
    { name: 'now you see me' }, 
    { name: 'the hunger games' },
    { name: 'the maze runner' }, 
    { name: 'forrest gump' }, 
    { name: 'the iron giant' }, 
    { name: 'mice and men' }, 
    { name: 'inception'},
    { name: 'nobody' },
    { name: 'brightburn' }, 
    { name: 'man of steel' }, 
    { name: 'rocky' },
    { name: 'edge of tomorrow' }, 
];

const list = document.querySelector('#list');

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

const searchInput = document.querySelector('#search');

searchInput.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(movie.filter(movieName => {
            return movieName.name.includes(value);
        }).sort((movieA, movieB) => {
            return getRelevancy(movieB.name, value) - getRelevancy(movieA.name, value);
        }));
    } else {
        clearList();
    }
})