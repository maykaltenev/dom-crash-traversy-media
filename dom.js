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

//TRAVERSING HTE TOM //
var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'lightblue';
// console.log(itemList.parentNode.parentNode);

// parentElement - inter changable 
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'blue'

// childNodes

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// firstChild
console.log(itemList.firstChild);
// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = ' Hallo 1 '
//lastChild

console.log(itemList.lastChild);
// lastElementChild
itemList.lastChild;
itemList.lastElementChild.textContent = ' Hallo 4 '