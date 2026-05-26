const form = document.querySelector('#input-item form');
const input = document.querySelector('#value');
const list = document.querySelector('#list-items ul');
const alertBox = document.querySelector('#alert');
const closeAlert = document.querySelector('#alert .delete-alert');


form.onsubmit = (event) => {
    event.preventDefault();

    const itemText = input.value.trim();
    if (itemText === '') return;

    const id = 'item-' + Date.now();
    const newLi = document.createElement('li');

    newLi.innerHTML = `
        <div class="checkbox-wrapper">
            <div class="checkbox-img"></div>
            <input type="checkbox" name="item" id="${id}">
            <label for="${id}">${itemText}</label>
            <img class="delete-item" src="assets/icons/garbage.svg" alt="remover item">
        </div>
    `;

    list.appendChild(newLi);

    input.value = '';
    input.focus();
}


list.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-item')) {
        const liToRemove = event.target.closest('li');
        liToRemove.remove();
        showAlert();
    }
});


let alertTimeout;

function showAlert() {
    clearTimeout(alertTimeout);
    alertBox.classList.add('show');
    alertTimeout = setTimeout(() => {
        alertBox.classList.remove('show');
    }, 1500);
}

if (closeAlert) {
    closeAlert.addEventListener('click', () => {
        alertBox.classList.remove('show');
        clearTimeout(alertTimeout);
    });
}