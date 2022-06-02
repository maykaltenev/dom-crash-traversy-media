// Examine the document object
// console.dir(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.type);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GET ELEMENTS BY ID
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000'

// GET ELEMENTS BY CLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[1])
// items[1].textContent = 'Hello 2';
// items[1].style.background = 'yellow';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.background = '#f4f4f4'
// }

// QuerrySelector 
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// // Querryselectorall
// var titles = document.querySelectorAll('.title')
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// //TRAVERSING HTE TOM //
// var itemList = document.querySelector('#items');
// //parentNode
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = 'lightblue';
// // console.log(itemList.parentNode.parentNode);

// // parentElement - inter changable 
// // console.log(itemList.parentElement);
// // itemList.parentElement.style.backgroundColor = 'blue'

// // childNodes

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = ' Hallo 1 '
// //lastChild

// console.log(itemList.lastChild);
// // lastElementChild
// itemList.lastChild;
// itemList.lastElementChild.textContent = ' Hallo 4 ';

// // nextSibling
// // console.log(itemList.nextSibling);
// // nextElementSibling
// // console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// //create Element 

// // create a div
// var newDiv = document.createElement('div');

// //add class
// newDiv.className = 'hello';
// console.log(newDiv);

// // add id
// newDiv.id = 'hello1';
// newDiv.setAttribute('tittle', 'Hello Div')

// //create text node
// var newDivText = document.createTextNode('Hello World');

// // add text to div
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);
// newDiv.style.fontSize = '30px'

// container.insertBefore(newDiv, h1);
// var button = document.getElementById('button-block').addEventListener('click', buttonClick);

// function buttonClick(e) {
//     //     console.log('button clicked')
//     document.getElementById('header-title').textContent = 'Changed';
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//     // console.log(e);
//     console.log(e.target.className);
//     console.log(e.target.classList);
//     var output = document.getElementById('output');
//     output.innerHTML = '<h3>' + e.target.id + '</h3>';
//     console.log(e.type)


// console.log(e.clientX)
// console.log(e.clientY) position from the window

// position from the actual element
// console.log(e.offsetX)
// console.log(e.offsetY)

// //based on if holding
// console.log(e.altKey)
// console.log(e.ctrKey)
// console.log(e.shiftKey)
// }

// var button = document.getElementById('button-block');
// var box = document.getElementById('box');
// box.style.width = '400px'
// box.style.height = '250px'

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select')

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)
// select.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent);
// itemInput.addEventListener('input', runEvent);
function runEvent(e) {
    e.preventDefault()
    console.log('Event Type: ' + e.type);

    // box.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ",80)";
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = e.target.value
}


