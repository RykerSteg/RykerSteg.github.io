const list = document.querySelector('.list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const deletebutton = document.createElement('button');
    const listItem = document.createElement('li');
    const text = document.createElement('span');

    listItem.appendChild(text);
    text.textContent = input.value;
    listItem.appendChild(deletebutton);
    deletebutton.textContent = 'X';
    list.appendChild(listItem);

    deletebutton.addEventListener('click', function() {
        list.removeChild(listItem);
        input.focus();
    
    })
    input.value = "";
    input.focus();
})
