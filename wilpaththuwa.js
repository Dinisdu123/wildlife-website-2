//Login button
const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {
  window.location.href = "login.html";
});

fetch("wilpaththuwa.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("Wilpaththuwa", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("Wilpaththuwa"));

document.getElementById("wilpaththuwa_header1").innerHTML =
  data.sections[0].title;
document.getElementById("wilpaththuwa_header2").innerHTML =
  data.sections[1].title;
document.getElementById("wilpaththuwa_header3").innerHTML =
  data.sections[2].title;
document.getElementById("para1").innerHTML = data.sections[0].content;
document.getElementById("para2").innerHTML = data.sections[1].content;
document.getElementById("para3").innerHTML = data.sections[2].content;

document.getElementById("img_1").src = data.sections[1].image;
document.getElementById("img_1").alt = data.sections[1].image_alt;
