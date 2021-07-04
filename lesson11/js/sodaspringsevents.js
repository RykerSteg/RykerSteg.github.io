const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject)
        const towns = jsonObject['towns'];

        createEvent(0);
    
    function createEvent(index){
        let event = document.createElement('section');
        let h4 = document.createElement('h4');

        h4.textContent = towns[index].name + " Events";
        event.appendChild(h4);

        let event1 = document.createElement('p');
        let event2 = document.createElement('p');
        let event3 = document.createElement('p');
        let events = towns[index].events;


        
        


        event1.textContent = events[0];
        event.appendChild(event1);
        event2.textContent = events[1];
        event.appendChild(event2);
        event3.textContent = events[2];
        event.appendChild(event3);
    

        event.setAttribute('class', 'events')
        document.querySelector('div.events').appendChild(event);
        
    }
})