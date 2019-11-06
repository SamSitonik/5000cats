// DONE with Shiyu!
// Create a constant of cats, that equals to Array, instead of having 2 lists, 1 here, and 1 on html
const uno = { 
  name: "Uno", 
  img: "./kat1.jpg", 
  clicks: 0, 
  width: "400px" };
const dos = { 
  name: "Dos", 
  img: "./kat2.jpg", 
  clicks: 0, 
  width: "475px" };
const tresLeches = {
  name: "Tres Leches",
  img: "./kat3.jpg",
  clicks: 0,
  width: "475px"
};
const gato = { 
  name: "Gato", 
  img: "./kat4.jpg", 
  clicks: 0, 
  width: "510px" };
const cinco = { 
  name: "Cinco", 
  img: "./kat5.png", 
  clicks: 0, 
  width: "450px" };

const cats = [uno, dos, tresLeches, gato, cinco];

// Select cats list placeholder
const ul = document.querySelector("ul");

// Render cats into HTML
for (cat of cats) {
  const li = document.createElement("li");
  li.textContent = cat.name;
   // Before the event listener, we are going to add a class BELOW, to CLEAN it up.
  li.classList.add("list-group-item");
  // Could be done easier with the library, but we are just doing this Vanilla for NOW.
  li.addEventListener(
    "click",
    (catCopy => {
      return () => {
        renderCat(catCopy);
      };
    })(cat)
  );
  ul.appendChild(li);
}

// Select display area
const display = document.querySelector("#display");

// 1 Fabulous Function!
function renderCat(cat) {
  // rest display area
  display.innerHTML = "";
  // Create name, image and clicks;
  const name = document.createElement("h3");
  name.textContent = cat.name;

  const image = document.createElement("img");
  image.src = cat.img;
  image.style.border = "10px solid black";
  // SHIYU said- Even though the widths are all listed individually in the objects, we still need to put this here. 
  // Dot syntax to let the computer know to go back there where cat is defined
  image.style.width = cat.width;
  image.style.height = "451px";
  image.addEventListener("click", () => {
    cat.clicks++;
    clicks.textContent = `clicks: ${cat.clicks}`;
  });

  const clicks = document.createElement("p");
  clicks.textContent = `clicks: ${cat.clicks}`;

  // Append into display
  display.appendChild(name);
  display.appendChild(image);
  display.appendChild(clicks);
}
