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
    { name: 'the conjuring' },
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
        window.open("https://ww2.m4ufree.com/watch-w8oa-interstellar-2014-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "the godfather") {
        window.open("https://ww2.m4ufree.com/watch-wtt9-the-godfather-1972-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "john wick") {
        window.open("https://ww2.m4ufree.com/watch-t8fa-john-wick-2014-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "scream (2022)") {
        window.open("https://ww2.m4ufree.com/watch-y0988-scream-2022-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "shaolin soccer") {
        window.open("https://ww2.m4ufree.com/watch-o6edb-shaolin-soccer-2001-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "kingsman: the secret service") {
        window.open("https://ww2.m4ufree.com/watch-wt9t-kingsman-the-secret-service-2015-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "django unchained") {
        window.open("https://ww2.m4ufree.com/watch-t978-django-unchained-2012-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "eternals") {
        window.open("https://ww2.m4ufree.com/watch-y00d6-eternals-2021-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "titanic") {
        window.open("https://ww2.m4ufree.com/watch-ad0-titanic-1997-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "the matrix") {
        window.open("https://ww2.m4ufree.com/watch-wo9w-the-matrix-1999-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "enchanto") {
        window.open("https://ww2.m4ufree.com/watch-y0tf0-encanto-2021-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "joker") {
        window.open("https://ww2.m4ufree.com/watch-o9y66-joker-2019-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "avatar") {
        window.open("https://ww2.m4ufree.com/watch-b8e-avatar-2009-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "the karate kid") {
        window.open("https://ww2.m4ufree.com/watch-ta8e-the-karate-kid-2010-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "1917") {
        window.open("https://ww2.m4ufree.com/watch-oa0b8-1917-2019-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "avengers: infinity war") {
        window.open("https://ww2.m4ufree.com/watch-oyiob-avengers-infinity-war-2018-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "ratatouille") {
        window.open("https://ww2.m4ufree.com/watch-w6f7-ratatouille-2007-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "the lion king") {
        window.open("https://ww2.m4ufree.com/watch-i6e0-the-lion-king-1994-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "black panther") {
        window.open("https://ww2.m4ufree.com/watch-wob7-black-panther-2018-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "xmen origins: wolverine") {
        window.open("https://ww2.m4ufree.com/watch-96e-xmen-origins-wolverine-2009-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "harry potter") {
        window.open("https://ww2.m4ufree.com/watch-w8ab-harry-potter-and-the-chamber-of-secrets-2002-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "rambo first blood") {
        window.open("https://ww2.m4ufree.com/watch-b7e-rambo-first-blood-1982-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "godzilla vs kong") {
        window.open("https://ww2.m4ufree.com/watch-oe6ii-godzilla-vs-kong-2021-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "the conjuring") {
        window.open("https://ww2.m4ufree.com/watch-w60c-the-conjuring-2013-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "candyman") {
        window.open("https://ww2.m4ufree.com/watch-ofa8w-candyman-2021-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "welcome to the jungle") {
        window.open("https://ww2.m4ufree.com/watch-w8cy-jumanji-welcome-to-the-jungle-2017-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "rush hour") {
        window.open("https://ww2.m4ufree.com/watch-7f6-rush-hour-1998-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "vanguard") {
        window.open("https://ww2.m4ufree.com/watch-ocdda-vanguard-2020-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "annabelle") {
        window.open("https://ww2.m4ufree.com/watch-c78-annabelle-2014-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "deadpool") {
        window.open("https://ww2.m4ufree.com/watch-ta9o-deadpool-2016-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "men in black") {
        window.open("https://www4.gogoanime.cm/category/charlotte", "_self");


    } else if (searchAction.toLowerCase() === "suicide squad") {
        window.open("https://ww2.m4ufree.com/watch-ta96-suicide-squad-2016-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "the martian") {
        window.open("https://ww2.m4ufree.com/watch-t8cw-the-martian-2015-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "saw 2004") {
        window.open("https://ww2.m4ufree.com/watch-w69f-saw-2004-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "skyfall") {
        window.open("https://ww2.m4ufree.com/watch-wy6o-skyfall-2012-007-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "now you see me") {
        window.open("https://ww2.m4ufree.com/watch-o7bw7-now-you-see-me-2013-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "the hunger games") {
        window.open("https://ww2.m4ufree.com/watch-ac9-the-hunger-games-2012-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "the maze runner") {
        window.open("https://ww2.m4ufree.com/watch-wwdd-the-maze-runner-2014-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "forrest gump") {
        window.open("https://ww2.m4ufree.com/watch-iyct-forrest-gump-1994-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "the iron giant") {
        window.open("https://ww2.m4ufree.com/watch-9yw-the-iron-giant-1999-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "mice and men") {
        window.open("https://ww2.m4ufree.com/watch-ceo-of-mice-and-men-1992-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "inception") {
        window.open("https://ww2.m4ufree.com/watch-w979-inception-2010-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "nobody") {
        window.open("https://ww2.m4ufree.com/watch-oe70e-nobody-2021-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "brightburn") {
        window.open("https://ww2.m4ufree.com/watch-o8odw-brightburn-2019-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "man of steel") {
        window.open("https://ww2.m4ufree.com/watch-76c-man-of-steel-2013-movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "rocky") {
        window.open("https://ww2.m4ufree.com/watch-atf-rocky-1976--movie-online-free-m4ufree.html", "_self");


    } else if (searchAction.toLowerCase() === "edge of tomorrow") {
        window.open("https://ww2.m4ufree.com/watch-b7y-edge-of-tomorrow-2014-movie-online-free-m4ufree.html", "_self");


    }
    
    
}