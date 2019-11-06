// Sam's thoughts, I could make a list and i do need that clisure because one click shouldn't lead to all of them getting clicked then CRaSH :|
// HINT from Shiyu- object!
// Let's simplify the code to just the lines where we add the event listener.
// var num = nums[i];
// elem.addEventListener('click', function() {
//     alert(num);
// });

// // The num variable changes, so we have to somehow connect it to our event listener function. Here's one way of doing it. First take a look at this code, then I'll explain how it works.

// elem.addEventListener('click', (function(numCopy) {
//     return function() {
//         alert(numCopy)
//     };
// })(num));
// 1st project, with one cat, creating our 1st function

// Select cat names in list
const uno = document.querySelector("#uno");
const dos = document.querySelector("#dos");
const tresleches = document.querySelector("#tresleches");
const gato = document.querySelector("#gato");
const cinco = document.querySelector("#cinco"); 

// Seelct display area
const display = document.querySelector("#display");

// Init count cat clicks
let unoClick = 0;
let dosClick = 0;
let treslechesClick = 0;
let gatoClick = 0;
let cincoClick = 0; 

// 1 Fabulous Function!

function renderCat(catName, catImg, catClick) {
  // rest display area
  display.innerHTML = ""; 
  // Create name, image and clicks; 
  const name = document.createElement("h3");
  name.textContent = catName; 


}

// Add event listener to cat 1
uno.addEventListener("click", () => {
  // reset display area
  display.innerHTML = ""; 
  // create name, image and clicks
  const name = document.createElement("h3");
  name.textContent = "Uno";

  const image = document.createElement("img");
  image.src = "./img/kat1.jpg";
  image.addEventListener("click", () => {
    unoClick++;
    clicks.textContent = `clicks: ${unoClick}`;
  });

  const clicks = document.createElement("p");
  clicks.textContent = `clicks: ${unoClick}`;

    // Append into display
    display.appendChild(name);
    display.appendChild(image);
    display.appendChild(clicks);
  });

  // Add event listener to cat 2
dos.addEventListener("click", () => {
  // reset display area
  display.innerHTML = ""; 
  // create name, image and clicks
  const name = document.createElement("h3");
  name.textContent= "Dos";

  const image = document.createElement("img");
  image.src = "./img/kat2.jpg";
  image.addEventListener("click", () => {
    dosClick++;
    clicks.textContent = `clicks: ${dosClick}`;
  });

  const clicks = document.createElement("p");
  clicks.textContent = `clicks: ${dosClick}`;

    // Append into display
    display.appendChild(name);
    display.appendChild(image);
    display.appendChild(clicks);
  });

  // Add event listener to cat 3
tresleches.addEventListener("click", () => {
  // reset display area
  display.innerHTML = ""; 
  // create name, image and clicks
  const name = document.createElement("h3");
  name.textContent= "TresLeches";

  const image = document.createElement("img");
  image.src = "./img/kat3.jpg";
  image.addEventListener("click", () => {
    treslechesClick++;
    clicks.textContent = `clicks: ${treslechesClick}`;
  });

  const clicks = document.createElement("p");
  clicks.textContent = `clicks: ${treslechesClick}`;

    // Append into display
    display.appendChild(name);
    display.appendChild(image);
    display.appendChild(clicks);
  });

// Add event listener to cat 4
gato.addEventListener("click", () => {
  // reset display area
  display.innerHTML = ""; 
  // create name, image and clicks
  const name = document.createElement("h3");
  name.textContent= "Gato";

  const image = document.createElement("img");
  image.src = "./img/kat4.jpg";
  image.addEventListener("click", () => {
    gatoClick++;
    clicks.textContent = `clicks: ${gatoClick}`;
  });


  const clicks = document.createElement("p");
  clicks.textContent = `clicks: ${gatoClick}`;

    // Append into display
    display.appendChild(name);
    display.appendChild(image);
    display.appendChild(clicks);
  });


  // Add event listener to cat 5
cinco.addEventListener("click", () => {
  // reset display area
  display.innerHTML = ""; 
  // create name, image and clicks
  const name = document.createElement("h3");
  name.textContent= "Cinco";

  const image = document.createElement("img");
  image.src = "./img/kat5.png";
  image.addEventListener("click", () => {
    cincoClick++;
    clicks.textContent = `clicks: ${cincoClick}`;
  });

  const clicks = document.createElement("p");
  clicks.textContent = `clicks: ${cincoClick}`;
  
  // Append into display
  display.appendChild(name);
  display.appendChild(image);
  display.appendChild(clicks);
});



// <img style="border:10px solid black;" src="kat1.jpg" width="125" height="151" alt="Photo of kat1" />
// <li>Dos<h3>Clicks: <span id="kat2"></span></h3></li>
// <img style="border:10px solid black;" src="kat2.jpg" width="175" height="151" alt="Photo of kat2" />
// <li>Tres<h3>Clicks: <span id="kat3"></span></h3></li>
// <img style="border:10px solid black;" src="kat3.png" width="175" height="151" alt="Photo of kat3" />
// <li>Gato<h3>Clicks: <span id="kat4"></span></h3></li>
// <img style="border:10px solid black;" src="kat4.jpg" width="190" height="151" alt="Photo of kat4" />
// <li>Cinco<h3>Clicks: <span id="kat5"></span></h3></li>
// <img style="border:10px solid black;" src="kat5.jpg" width="150" height="151" alt="Photo of kat5" />





