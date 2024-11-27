async function fetchItems() {
    const response = await fetch('http://localhost:5000/api/items');
    const items = await response.json();
  
    const list = document.getElementById('item-list');
    list.innerHTML = ''; // Clear the list
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.name;
      list.appendChild(li);
    });
  }
  
  async function addItem() {
    const input = document.getElementById('item-input');
    const itemName = input.value;
  
    await fetch('http://localhost:5000/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: itemName }),
    });
  
    input.value = '';
    fetchItems(); // Refresh the list
  }
  
  document.getElementById('add-button').addEventListener('click', addItem);
  fetchItems(); // Initial fetch
  

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click',()=> {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click',()=> {
        nav.classList.remove('active');
    })
}