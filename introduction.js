//Login button
const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {
  window.location.href = "login.html";
});

fetch("introduction.json")
  .then((response) => response.json())
  .then((data) => {
    //Store in local storage
    localStorage.setItem("introData", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("introData"));

document.getElementById("MainHead").innerHTML = data.main.header;

document.getElementById("subtitle_1").innerHTML = data.locations[0].name;
document.getElementById("para_1").innerHTML = data.locations[0].description;
document.getElementById("map_1").src = data.locations[0].map_link;
document.getElementById("img_1").src = data.locations[0].image;

document.getElementById("subtitle_2").innerHTML = data.locations[1].name;
document.getElementById("para_2").innerHTML = data.locations[1].description;
document.getElementById("map_2").src = data.locations[1].map_link;
document.getElementById("img_2").src = data.locations[1].image;

document.getElementById("subtitle_3").innerHTML = data.locations[2].name;
document.getElementById("para_3").innerHTML = data.locations[2].description;
document.getElementById("map_3").src = data.locations[2].map_link;
document.getElementById("img_3").src = data.locations[2].image;
