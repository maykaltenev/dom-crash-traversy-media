const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItem);
// Add item
function addItem(e) {
    e.preventDefault();
    // get input value
    let newItem = document.getElementById('item').value;

    // create new li element
    let li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    console.log(li);
    // add text node with input
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    let deleteBtn = document.createElement('button');

    // Add classes to del.button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append Button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            // target the li
            let li = e.target.parentElement;
            // item list is the ul
            itemList.removeChild(li);
        }
        console.log(1)
    }
}

function filterItem(e) {
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}


