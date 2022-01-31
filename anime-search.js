const anime = [
    { name: 'attack on titan' },   
    { name: 're zero' }, 
    { name: 'my hero academia' },
    { name: 'naruto' },
    { name: 'bleach' },
    { name: 'seven deadly sins' },
    { name: 'vinland saga' },
    { name: 'bungou stray dogs' }, 
    { name: 'shield hero' },
    { name: 'demon slayer' },
    { name: 'one punch man' },
    { name: 'hunter x hunter' },
    { name: 'samurai champlo' },
    { name: 'one piece' },
    { name: 'jojos bizzare adventures' },
    { name: 'baki' },
    { name: 'jujutsu kaisen' },
    { name: 'violet evergarden' },
    { name: 'fire force' },
    { name: 'tokyo revengers' },
    { name: 'twin star exorcist' },
    { name: 'fate stay night' },
    { name: 'rent a girlfriend' },
    { name: 'love is war' },
    { name: 'tower of god' },
    { name: 'mob psycho 100' },
    { name: 'haikyuu' },
    { name: 'promised neverland' },
    { name: 'sword art online' },
    { name: 'the god of high school'},
    { name: 'steins gate' },
    { name: 'charlotte' },
    { name: 'dragon ball' }, 
    { name: 'eightysix' }, 
    { name: 'konosuba' },
    { name: 'assassination classroom' },
    { name: 'erased' }, 
    { name: 'bunny girl senpai' },
    { name: 'tokyo ghoul' }, 
    { name: 'dr stone' }, 
    { name: 'nisekoi' }, 
    { name: 'seraph of the end' }, 
    { name: 'cowboy bebop'},
    { name: 'death note' },
    { name: 'vivy' }, 
    { name: 'fullmetal alchemist' }, 
    { name: 'mushoku tensei' },
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

function openPage(){
    var searchAction = document.getElementById("search").value;

    if (searchAction.toLowerCase() === "attack on titan") {
        window.open("../anime-seasons/attack-on-titan.html", "_self");
    } else if (searchAction === "baki") {
        window.open("../anime-seasons/baki.html", "_self");
    }
    
    
}