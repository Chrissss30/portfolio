let button = document.getElementById('settings');
const header = document.getElementById('header');

function light(event){
    event.preventDefault();
    header.style.backgroundColor = '#FFF';
};

button.addEventListener('click', light);