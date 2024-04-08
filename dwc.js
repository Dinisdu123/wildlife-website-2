//Login button
const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {
  window.location.href = "login.html";
});

fetch("dwc.json")
  .then((response) => response.json())
  .then((data) => {
    //Store local storage
    if (!localStorage.getItem("Department")) {
      localStorage.setItem("Department", JSON.stringify(data));
    }
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("Department"));

document.getElementById("dwc_intro_header").innerHTML = data.introduction.name;
document.getElementById("dwc_para_1").innerHTML =
  data.introduction.description_01;
document.getElementById("dwc_para_2").innerHTML =
  data.introduction.description_02;
document.getElementById("gallery_heading").innerHTML = data.title;
document.getElementById("google_heading").innerHTML = data.location.title;
document.getElementById("iframe").src = data.location.map;
