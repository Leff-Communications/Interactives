const modal1 = document.querySelector('#modal-1');
const modal2 = document.querySelector('#modal-2');
const modal3 = document.querySelector('#modal-3');
const modal4 = document.querySelector('#modal-4');
const modal5 = document.querySelector('#modal-5');


const close1 = document.querySelector('#close-1');

const close2 = document.querySelector('#close-2');

const close3 = document.querySelector('#close-3');

const close4 = document.querySelector('#close-4');;

const close5 = document.querySelector('#close-5');

const backdrop = document.querySelector('#modal-1::backdrop');

const openModal1 = document.querySelector('#tile-1-hover');
const openModal2 = document.querySelector('#tile-2-hover');
const openModal3 = document.querySelector('#tile-3-hover');
const openModal4 = document.querySelector('#tile-4-hover');
const openModal5 = document.querySelector('#tile-5-hover');

function nav1() {
    modal5.close();
    modal2.close();
    modal1.showModal();
}

function nav2() {
    modal1.close();
    modal3.close();
    modal2.showModal();
}

function nav3() {
    modal2.close();
    modal4.close();
    modal3.showModal();
}

function nav4() {
    modal3.close();
    modal5.close();
    modal4.showModal();
}

function nav5() {
    console.log('clicked');
    modal4.close();
    modal1.close();
    modal5.showModal();
}


openModal1.addEventListener('click', function (event) {
    modal1.showModal();
})

openModal2.addEventListener('click', function (event) {
    modal2.showModal();
})

openModal3.addEventListener('click', function (event) {
    modal3.showModal();
})

openModal4.addEventListener('click', function (event) {
    modal4.showModal();
})

openModal5.addEventListener('click', function (event) {
    modal5.showModal();
})

modal1.addEventListener('click', function (event) {
    var rect = modal1.getBoundingClientRect();
        var isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
          && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            modal1.close();
        } else {
            console.log('inside');
        }
})

modal2.addEventListener('click', function (event) {
    var rect = modal2.getBoundingClientRect();
        var isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
          && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            modal2.close();
        }
})

modal3.addEventListener('click', function (event) {
    var rect = modal3.getBoundingClientRect();
        var isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
          && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            modal3.close();
        }
})

modal4.addEventListener('click', function (event) {
    var rect = modal4.getBoundingClientRect();
        var isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
          && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            modal4.close();
        }
})

modal5.addEventListener('click', function (event) {
    var rect = modal5.getBoundingClientRect();
        var isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
          && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            modal5.close();
        }
})

close1.addEventListener('click', () => {
    modal1.close();
    modal2.close();
    modal3.close();
    modal4.close();
    modal5.close();
})

close2.addEventListener('click', () => {
    modal1.close();
    modal2.close();
    modal3.close();
    modal4.close();
    modal5.close();
})

close3.addEventListener('click', () => {
    modal1.close();
    modal2.close();
    modal3.close();
    modal4.close();
    modal5.close();
})

close4.addEventListener('click', () => {
    modal1.close();
    modal2.close();
    modal3.close();
    modal4.close();
    modal5.close();
})

close5.addEventListener('click', () => {
    modal1.close();
    modal2.close();
    modal3.close();
    modal4.close();
    modal5.close();
})