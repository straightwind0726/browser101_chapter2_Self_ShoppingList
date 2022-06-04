const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const plusBtn = document.querySelector('.footer__plusBtn');

function onAdd() {
    const text = input.value;
    if(text === '') {
        input.focus();
        return;
    }
    const item = createItem(text);
    items.appendChild(item);
    input.value = '';
    input.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const itemName = document.createElement('span');
    itemName.setAttribute('class', 'item__name');
    itemName.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__deleteBtn');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(itemName);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
}

plusBtn.addEventListener('click', (event) => {
    onAdd();
})

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        onAdd();
    }
})