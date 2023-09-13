const container = document.getElementById("container");

const items = [
    { src: "testDir/TShirt.png", text: "Футболка" ,
    src: "testDir/shorts.png", text: "Шорты" ,
    src: "testDir/sweater.png", text: "Свитер" 
}
    // Добавьте другие объекты по аналогии
];


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