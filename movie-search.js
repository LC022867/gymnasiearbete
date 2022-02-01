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

function openPage(){
    var searchAction = document.getElementById("search").value;

    if (searchAction.toLowerCase() === "spiderman") {
        window.open("https://ww2.m4ufree.com/watch-t979-spider-man-2002-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "intersteller") {
        window.open("../anime-seasons/re_zero.html", "_self");


    } else if (searchAction.toLowerCase() === "the godfather") {
        window.open("../anime-seasons/my-hero-academia.html", "_self");


    } else if (searchAction.toLowerCase() === "john wick") {
        window.open("../anime-seasons/naruto.html", "_self");


    } else if (searchAction.toLowerCase() === "scream (2022)") {
        window.open("https://www4.gogoanime.cm/category/bleach", "_self");


    } else if (searchAction.toLowerCase() === "shaolin soccer") {
        window.open("../anime-seasons/the_seven_deadly_sins", "_self");


    } else if (searchAction.toLowerCase() === "kingsman: the secret service") {
        window.open("https://www1.gogoanime.pe/category/vinland-saga", "_self");


    } else if (searchAction.toLowerCase() === "django unchained") {
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