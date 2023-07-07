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


const openModal1 = document.querySelector('#tile-1-hover');
const openModal2 = document.querySelector('#tile-2-hover');
const openModal3 = document.querySelector('#tile-3-hover');
const openModal4 = document.querySelector('#tile-4-hover');
const openModal5 = document.querySelector('#tile-5-hover');


openModal1.addEventListener('click', function (event) {
    modal1.classList.add("modal-open");
})

openModal2.addEventListener('click', function (event) {
    modal2.classList.add("modal-open");
})

openModal3.addEventListener('click', function (event) {
    modal3.classList.add("modal-open");
})

openModal4.addEventListener('click', function (event) {
    modal4.classList.add("modal-open");
})

openModal5.addEventListener('click', function (event) {
    modal5.classList.add("modal-open");
})

//the below functions are used to calculate the size of the modal div that opens. 
//Clicking on any grey space outside of the modal would end up closing the modal 
//and allowing the user to see the beginning screen
modal1.addEventListener('click', function (event) {
    var rect = modal1.children[0].getBoundingClientRect();
        var isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
          && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            console.log("out")
            modal1.classList.remove("modal-open");
        }
})

modal2.addEventListener('click', function (event) {
    var rect = modal2.children[0].getBoundingClientRect();
        var isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
          && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            modal2.classList.remove("modal-open");
        }
})

modal3.addEventListener('click', function (event) {
    var rect = modal3.children[0].getBoundingClientRect();
        var isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
          && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            modal3.classList.remove("modal-open");
        }
})

modal4.addEventListener('click', function (event) {
    var rect = modal4.children[0].getBoundingClientRect();
        var isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
          && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            modal4.classList.remove("modal-open");
        }
})

modal5.addEventListener('click', function (event) {
    var rect = modal5.children[0].getBoundingClientRect();
        var isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
          && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            modal5.classList.remove("modal-open");
        }
})

//all functions below are used to close any modal after hitting the 'X' button on a modal
close1.addEventListener('click', () => {
    modal1.classList.remove("modal-open");
    modal2.classList.remove("modal-open");
    modal3.classList.remove("modal-open");
    modal4.classList.remove("modal-open");
    modal5.classList.remove("modal-open");
})

close2.addEventListener('click', () => {
    modal1.classList.remove("modal-open");
    modal2.classList.remove("modal-open");
    modal3.classList.remove("modal-open");
    modal4.classList.remove("modal-open");
    modal5.classList.remove("modal-open");
})

close3.addEventListener('click', () => {
    modal1.classList.remove("modal-open");
    modal2.classList.remove("modal-open");
    modal3.classList.remove("modal-open");
    modal4.classList.remove("modal-open");
    modal5.classList.remove("modal-open");
})

close4.addEventListener('click', () => {
    modal1.classList.remove("modal-open");
    modal2.classList.remove("modal-open");
    modal3.classList.remove("modal-open");
    modal4.classList.remove("modal-open");
    modal5.classList.remove("modal-open");
})

close5.addEventListener('click', () => {
    modal1.classList.remove("modal-open");
    modal2.classList.remove("modal-open");
    modal3.classList.remove("modal-open");
    modal4.classList.remove("modal-open");
    modal5.classList.remove("modal-open");
})

//each function below opens the respective modal using the navigation at the bottom of each modal
//(nav1() is used for opening the modal associated with tile-1; nav(2) is used for tile-2; etc.)

//Each is called with the onclick attribute within the html
function nav1() {
    modal5.classList.remove("modal-open");
    modal2.classList.remove("modal-open");
    modal1.classList.add("modal-open");
}

function nav2() {
    modal1.classList.remove("modal-open");
    modal3.classList.remove("modal-open");
    modal2.classList.add("modal-open");
}

function nav3() {
    modal2.classList.remove("modal-open");
    modal4.classList.remove("modal-open");
    modal3.classList.add("modal-open");
}

function nav4() {
    modal3.classList.remove("modal-open");
    modal5.classList.remove("modal-open");
    modal4.classList.add("modal-open");
}

function nav5() {
    console.log('clicked');
    modal4.classList.remove("modal-open");
    modal1.classList.remove("modal-open");
    modal5.classList.add("modal-open");
}