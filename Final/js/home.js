const requestURL = 
"https://rykersteg.github.io/Final/json/directory.json"
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject)
        const directory = jsonObject['directory'];

        createCard(0);
        createCard(1);
        createCard(2);
        createCard(3);
        createCard(4);
        createCard(5);
        createCard(6);
        createCard(7);


function createCard(index){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');

    h2.textContent = directory[index].name;
    h2.setAttribute('class', 'header' + index);

    card.appendChild(h2);

    let portrait = document.createElement('img');

    portrait.setAttribute('src', "images/" + directory[index].logo);
    portrait.setAttribute('alt', directory[index].name);
    portrait.setAttribute('class', 'img' + index);

    card.appendChild(portrait);

    let website = document.createElement('a');
    website.href = directory[index].website;
    website.innerHTML = directory[index].website;
    website.setAttribute('class', 'web' + index);

    card.appendChild(website);

    let contact = document.createElement('p');
    contact.textContent = directory[index].contact;
    contact.setAttribute('class', 'contact' + index);

    card.appendChild(contact)
    
    card.setAttribute('class', 'section' + index)
    document.querySelector('div.cards').appendChild(card);
}

        /*for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" ||towns[i].name == "Fish Haven"){
                let card = document.createElement('section');
                card.setAttribute('id', towns[i].name)
                let h2 = document.createElement('h2');

                h2.textContent = towns[i].name;

                card.appendChild(h2);

                let portrait = document.createElement('img');

                
                portrait.setAttribute('src', towns[i].photo);
                portrait.setAttribute('alt', towns[i].name);

                card.appendChild(portrait);

                document.querySelector('div.cards').appendChild(card);
            }
        }*/
    });

