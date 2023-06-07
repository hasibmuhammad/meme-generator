import { memes } from "./api/data/data.js";

// Dom element
const yearEl = document.getElementById("year");
const buttEl = document.getElementById("imagegen");
const memeEl = document.getElementById("meme-image");
const toptextEl = document.getElementById("top-text");
const bottomtextEl = document.getElementById("bottom-text");

const top = document.getElementsByClassName("top");
const bottom = document.getElementsByClassName("bottom");

// Get the current year and add it on the footer copyright section dynamically
yearEl.innerText = new Date().getFullYear();

// Function to get random image
function getMemeImage() {
  const memesArray = memes;
  const randomNumber = Math.floor(Math.random() * memesArray.length);
  const url = memesArray[randomNumber].url;
  const title = memesArray[randomNumber].name;

  memeEl.setAttribute("src", url);
  memeEl.setAttribute("alt", title);
}

buttEl.addEventListener("click", getMemeImage());

toptextEl.addEventListener("keyup", (e) => {
  top[0].innerText = e.target.value;
});

bottomtextEl.addEventListener("keyup", (e) => {
  bottom[0].innerText = e.target.value;
});
