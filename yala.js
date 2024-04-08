//Login button
const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {
  window.location.href = "login.html";
});

fetch("yala.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("Yala", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("Yala"));

document.getElementById("main_img").src = data.main_img.src;
document.getElementById("main_img").alt = data.main_img.alt;
document.getElementById("title_1").innerHTML = data.sections[0].title;
document.getElementById("image_1").src = data.sections[0].image;
document.getElementById("content_1").innerHTML = data.sections[0].description;

document.getElementById("title_2").innerHTML = data.sections[1].title;
document.getElementById("image_2").src = data.sections[1].image;

document.getElementById("subtitle_1").innerHTML =
  data.sections[1].subSections[0].title;
document.getElementById("subPara_1").innerHTML =
  data.sections[1].subSections[0].description;

document.getElementById("subtitle_2").innerHTML =
  data.sections[1].subSections[1].title;
document.getElementById("subPara_2").innerHTML =
  data.sections[1].subSections[1].description;

document.getElementById("title_3").innerHTML = data.sections[2].title;
document.getElementById("para_1").innerHTML = data.sections[2].description;
document.getElementById("para_2").innerHTML = data.sections[2].description_2;
