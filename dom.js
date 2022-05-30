// Examine the document object
// console.dir(document)
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.type);
console.log(document.head);
console.log(document.body);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

// GET ELEMENTS BY ID
console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye';
headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'solid 3px #000'

//GET ELEMENTS BY CLASSNAME