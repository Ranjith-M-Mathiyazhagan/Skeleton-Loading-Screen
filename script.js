const header = document.querySelector("#header");
const title = document.querySelector("#title");
const part = document.querySelector("#part");
const profileImage = document.querySelector("#profile_image");
const name = document.querySelector("#name");
const date = document.querySelector("#date");

const animatedBg = document.querySelectorAll(".animation-bg");
const animatedBgText = document.querySelectorAll(".animation-bg-text");

setTimeout(getData, 2000);

function getData() {
  header.innerHTML = `
  <img src="https://images.unsplash.com/photo-1705650065370-656dafd3e20d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="women-picture">`;
  profileImage.innerHTML = `<img src="https://randomuser.me/portraits/women/32.jpg" alt="women-picture">`;
  title.innerHTML = `
Lorem ipsum dolor sit amet`;
  part.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Vero,aspernatur.`;
  name.innerHTML = `Jogn Dose`;
  date.innerHTML = "Oct 08,2020";
  animatedBg.forEach((bg) => bg.classList.remove("animation-bg"));
  animatedBgText.forEach((bgText) =>
    bgText.classList.remove("animation-bg-text")
  );
}
