const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('E:/projects/py_projects/sada/database/goods.db');

db.all('SELECT source, name FROM items', (err, rows) => {
  if (err) {
    console.error(err.message);
    return;
  }
  const items = rows.map(row => ({ src: row.src, text: row.text }));
});
db.close()




const container = document.getElementById("container");





items.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("item_container");

    const img = document.createElement("img");
    img.src = item.src;

    const p = document.createElement("p");
    p.textContent = item.text;

    const button = document.createElement("button");
    button.textContent = "Купить";

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(button);

    container.appendChild(div);
});


let tg = window.Telagram.WebApp;
let buy = document.getElementById("buy");
let order = document.getElementById("order")