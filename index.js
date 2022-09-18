const input = document.querySelector('#input-list');
const buttonSend = document.querySelector('#send');
const buttonClear  = document.querySelector('#clear');
const itemList = document.querySelector("#item-list");

let list = [];

const createDiv = () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'item');

    return div;
}

const renderizaList = () => {
    itemList.innerHTML = "";

    list.map((item) => {
        const div = createDiv();

        div.innerText = item;
        itemList.appendChild(div);
    })
}

const addInList = () => {
    list.push(input.value);
    console.log(list)

    // Adiciona 1 item na lista e toda vez que adiciona a gente RENDERIZA as divs novamente 
    renderizaList()

    localStorage.setItem('list', JSON.stringify(list));
    resetInput();
}

const resetInput = () => {
    input.value = "";
    input.focus();
}

buttonSend.addEventListener('click', (event) => {
    event.preventDefault();
    if(input.value) addInList();
});

buttonClear.addEventListener('click', (event) => {
    event.preventDefault();

    list = [];
    localStorage.setItem('list', JSON.stringify(list));
    renderizaList();
})


if(localStorage.getItem('list')){
    list = JSON.parse(localStorage.getItem('list'));
    console.log(list)

    renderizaList(list);
    
}