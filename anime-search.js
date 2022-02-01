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


    } else if (searchAction.toLowerCase() === "re zero") {
        window.open("../anime-seasons/re_zero.html", "_self");


    } else if (searchAction.toLowerCase() === "my hero academia") {
        window.open("../anime-seasons/my-hero-academia.html", "_self");


    } else if (searchAction.toLowerCase() === "naruto") {
        window.open("../anime-seasons/naruto.html", "_self");


    } else if (searchAction.toLowerCase() === "bleach") {
        window.open("https://www4.gogoanime.cm/category/bleach", "_self");


    } else if (searchAction.toLowerCase() === "seven deadly sins") {
        window.open("../anime-seasons/the_seven_deadly_sins", "_self");


    } else if (searchAction.toLowerCase() === "vinland saga") {
        window.open("https://www1.gogoanime.pe/category/vinland-saga", "_self");


    } else if (searchAction.toLowerCase() === "bungou stray dogs") {
        window.open("../anime-seasons/bungou-stray-dogs.html", "_self");


    } else if (searchAction.toLowerCase() === "shield hero") {
        window.open("https://www4.gogoanime.cm/category/tate-no-yuusha-no-nariagari", "_self");


    } else if (searchAction.toLowerCase() === "demon slayer") {
        window.open("../anime-seasons/demon_slayer.html", "_self");


    } else if (searchAction.toLowerCase() === "one punch man") {
        window.open("../anime-seasons/one-punch-man.html", "_self");


    } else if (searchAction.toLowerCase() === "hunter x hunter") {
        window.open("https://www1.gogoanime.pe/category/hunter-x-hunter-2011", "_self");


    } else if (searchAction.toLowerCase() === "samurai champlo") {
        window.open("https://www4.gogoanime.cm/category/samurai-champloo", "_self");


    } else if (searchAction.toLowerCase() === "one piece") {
        window.open("https://www4.gogoanime.cm/category/one-piece", "_self");


    } else if (searchAction.toLowerCase() === "jojos bizzare adventures") {
        window.open("../anime-seasons/jojos-bizzare-adventure.html", "_self");


    } else if (searchAction.toLowerCase() === "baki") {
        window.open("../anime-seasons/baki.html", "_self");


    } else if (searchAction.toLowerCase() === "jujutsu kaisen") {
        window.open("https://www4.gogoanime.cm/category/jujutsu-kaisen-tv", "_self");


    } else if (searchAction.toLowerCase() === "violet evergarden") {
        window.open("../anime-seasons/violet-evergarden.html", "_self");


    } else if (searchAction.toLowerCase() === "fire force") {
        window.open("../anime-seasons/fire_force.html", "_self");


    } else if (searchAction.toLowerCase() === "tokyo revengers") {
        window.open("https://www4.gogoanime.cm/category/tokyo-revengers-uncensored", "_self");


    } else if (searchAction.toLowerCase() === "twin star exorcist") {
        window.open("https://www4.gogoanime.cm/category/sousei-no-onmyouji", "_self");


    } else if (searchAction.toLowerCase() === "fate stay night") {
        window.open("../anime-seasons/fate-stay.html", "_self");


    } else if (searchAction.toLowerCase() === "rent a girlfriend") {
        window.open("https://www1.gogoanime.pe/category/kanojo-okarishimasu", "_self");


    } else if (searchAction.toLowerCase() === "love is war") {
        window.open("../anime-seasons/love_is_war.html", "_self");


    } else if (searchAction.toLowerCase() === "tower of god") {
        window.open("https://www4.gogoanime.cm/category/kami-no-tou", "_self");


    } else if (searchAction.toLowerCase() === "mob psycho 100") {
        window.open("../anime-seasons/mob-psycho.html", "_self");


    } else if (searchAction.toLowerCase() === "haikyuu") {
        window.open("../anime-seasons/haikyuu.html", "_self");


    } else if (searchAction.toLowerCase() === "promised neverland") {
        window.open("https://www4.gogoanime.cm/category/yakusoku-no-neverland", "_self");


    } else if (searchAction.toLowerCase() === "sword art online") {
        window.open("../anime-seasons/sword_art_online.html", "_self");


    } else if (searchAction.toLowerCase() === "the god of high school") {
        window.open("https://www1.gogoanime.pe/category/the-god-of-high-school", "_self");


    } else if (searchAction.toLowerCase() === "steins gate") {
        window.open("../anime-seasons/steins-gate.html", "_self");


    } else if (searchAction.toLowerCase() === "charlotte") {
        window.open("https://www4.gogoanime.cm/category/charlotte", "_self");


    } else if (searchAction.toLowerCase() === "dragon ball") {
        window.open("../anime-seasons/dragon_ball.html", "_self");


    } else if (searchAction.toLowerCase() === "eightysix") {
        window.open("../anime-seasons/eightysix.html", "_self");


    } else if (searchAction.toLowerCase() === "konosuba") {
        window.open("../anime-seasons/konosuba.html", "_self");


    } else if (searchAction.toLowerCase() === "assassination classroom") {
        window.open("../anime-seasons/assassination-classroom.html", "_self");


    } else if (searchAction.toLowerCase() === "erased") {
        window.open("https://www1.gogoanime.pe/category/boku-dake-ga-inai-machi", "_self");


    } else if (searchAction.toLowerCase() === "bunny girl senpai") {
        window.open("../anime-seasons/bunny_girl_senpai.html", "_self");


    } else if (searchAction.toLowerCase() === "tokyo ghoul") {
        window.open("../anime-seasons/tokyo-ghoul.html", "_self");


    } else if (searchAction.toLowerCase() === "dr stone") {
        window.open("../anime-seasons/dr-stone.html", "_self");


    } else if (searchAction.toLowerCase() === "nisekoi") {
        window.open("../anime-seasons/nisekoi.html", "_self");


    } else if (searchAction.toLowerCase() === "seraph of the end") {
        window.open("../anime-seasons/seraph-of-the-end.html", "_self");


    } else if (searchAction.toLowerCase() === "cowby bebop") {
        window.open("https://www1.gogoanime.pe/category/cowboy-bebop", "_self");


    } else if (searchAction.toLowerCase() === "death note") {
        window.open("https://www1.gogoanime.pe/category/death-note", "_self");


    } else if (searchAction.toLowerCase() === "vivy") {
        window.open("https://www1.gogoanime.pe/category/vivy-fluorite-eyes-song", "_self");


    } else if (searchAction.toLowerCase() === "re ") {
        window.open("../anime-seasons/re_zero.html", "_self");


    } else if (searchAction.toLowerCase() === "re zero") {
        window.open("../anime-seasons/re_zero.html", "_self");


    } else if (searchAction.toLowerCase() === "re zero") {
        window.open("../anime-seasons/re_zero.html", "_self");


    }
    
    
}