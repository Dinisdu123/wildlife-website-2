//Login button
const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {
  window.location.href = "login.html";
});

fetch("animal.json")
  .then((response) => response.json())
  .then((data) => {
    //Store in local storage
    localStorage.setItem("Animals page", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("Animals page"));

document.getElementById("header").innerHTML = data.header;
document.getElementById("para").innerHTML = data.discription;
document.getElementById("img_1").src = data.animals_01[0].image;
document.getElementById("img_1").alt = data.animals_01[0].alt;

document.getElementById("img_2").src = data.animals_01[1].image;
document.getElementById("img_2").alt = data.animals_01[1].alt;

document.getElementById("img_3").src = data.animals_01[2].image;
document.getElementById("img_3").alt = data.animals_01[2].alt;

document.getElementById("img_4").src = data.animals_01[3].image;
document.getElementById("img_4").alt = data.animals_01[3].alt;

document.getElementById("img_5").src = data.animals_02[0].image;
document.getElementById("img_5").alt = data.animals_02[0].alt;

document.getElementById("img_6").src = data.animals_02[1].image;
document.getElementById("img_6").alt = data.animals_02[1].alt;

document.getElementById("img_7").src = data.animals_02[2].image;
document.getElementById("img_7").alt = data.animals_02[2].alt;

document.getElementById("img_8").src = data.animals_03[0].image;
document.getElementById("img_8").alt = data.animals_03[0].alt;

document.getElementById("img_9").src = data.animals_03[1].image;
document.getElementById("img_9").alt = data.animals_03[1].alt;

document.getElementById("img_10").src = data.animals_03[2].image;
document.getElementById("img_10").alt = data.animals_03[2].alt;

document.getElementById("img_11").src = data.animals_03[3].image;
document.getElementById("img_11").alt = data.animals_03[3].alt;
