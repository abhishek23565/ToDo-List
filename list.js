// selectors

let inputTag = document.querySelector('#inputTag');
let list = document.querySelector('#list');
let addTop = document.querySelector('#btn1');
let addBottom = document.querySelector('#btn2');

// code for add item bottom button
addBottom.addEventListener('click', function (event) {
    event.preventDefault();
    // let fchild = list.firstElementChild.value;
    if (inputTag.value == "") {
        document.getElementById('error').style.display = "block";
    }

    else {
        // create div element
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-div');

        // create li element
        let todoList = document.createElement('li');
        todoList.innerText = inputTag.value;
        todoList.classList.add('todo-list');
        todoDiv.appendChild(todoList);

        // create check button
        let checkButton = document.createElement('button');
        checkButton.innerText = "✔";
        checkButton.classList.add('checkbtn');
        todoDiv.appendChild(checkButton);

        // create trash button
        let trashButton = document.createElement('button');
        trashButton.innerText = "X";
        trashButton.classList.add('trashbtn');
        todoDiv.appendChild(trashButton);

        // adding div to list
        list.appendChild(todoDiv);

        inputTag.value = "";
        document.getElementById('error').style.display = "none";

    }

});


// code for add item top button

addTop.addEventListener('click', function (event) {
    event.preventDefault();
    // let fchild = list.firstElementChild.value;
    if (inputTag.value == "") {
        document.getElementById('error').style.display = "block";
    }

    else {
        // create div element
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-div');

        // create li element
        let todoList = document.createElement('li');
        todoList.innerText = inputTag.value;
        todoList.classList.add('todo-list');
        todoDiv.appendChild(todoList);

        // create check button
        let checkButton = document.createElement('button');
        checkButton.innerText = "✔";
        checkButton.classList.add('checkbtn');
        todoDiv.appendChild(checkButton);

        // create trash button
        let trashButton = document.createElement('button');
        trashButton.innerText = "X";
        trashButton.classList.add('trashbtn');
        todoDiv.appendChild(trashButton);

        // adding div to list
        let pos = list.firstElementChild;
        if (pos == "null") {
            list.appendChild(todoDiv);
        }

        else {
            list.insertBefore(todoDiv, pos);
        }

        inputTag.value = "";
        document.getElementById('error').style.display = "none";
    }

});


// code for delete button

// let delbtn = document.querySelector('.trashbtn');
list.addEventListener('click', function (event) {
    event.preventDefault();
    let item = event.target;
    if (item.classList[0] === "trashbtn") {
        let todel = item.parentElement;
        todel.classList.add('down');
        todel.addEventListener('transitionend', function () {
            todel.remove()
        });
    }

    if (item.classList[0] === "checkbtn") {
        let todel = item.parentElement;
        todel.classList.toggle('completed');
    }
});