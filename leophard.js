//Login button
const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {
  window.location.href = "login.html";
});

fetch("leophard.json")
  .then((response) => response.json())
  .then((data) => {
    //Store in local storage
    localStorage.setItem("Leophard", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("Leophard"));

document.getElementById("LeophardFoundHeader").innerHTML =
  data.Leophard_found.title;
document.getElementById("LeophardFoundPara").innerHTML =
  data.Leophard_found.discription;
document.getElementById("img_0").src = data.Leophard_found.img;

document.getElementById("yalaHeader").innerHTML = data.Yala.header;
document.getElementById("img_1").src = data.Yala.img;
document.getElementById("yalaPara").innerHTML = data.Yala.description;

document.getElementById("wilpattuwaHeader").innerHTML = data.Wilpaththu.header;
document.getElementById("img_2").src = data.Wilpaththu.img;
document.getElementById("wilpattuwaPara").innerHTML =
  data.Wilpaththu.description;

document.getElementById("udawalawaHeader").innerHTML = data.Udawalawa.header;
document.getElementById("img_3").src = data.Udawalawa.img;
document.getElementById("udawalawaPara").innerHTML = data.Udawalawa.description;

document.getElementById("threats_header").innerHTML = data.threats.heading;
document.getElementById("subtitle_1").innerHTML =
  data.threats.threatsList[0].title;
document.getElementById("img_4").src = data.threats.threatsList[0].img;
document.getElementById("para_1").innerHTML =
  data.threats.threatsList[0].description;

document.getElementById("subtitle_2").innerHTML =
  data.threats.threatsList[1].title;
document.getElementById("img_5").src = data.threats.threatsList[1].img;
document.getElementById("para_2").innerHTML =
  data.threats.threatsList[1].description;
