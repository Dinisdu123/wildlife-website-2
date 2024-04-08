//Login button
const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {
  window.location.href = "login.html";
});

fetch("index.json")
  .then((response) => response.json())
  .then((data) => {
    // store in local storage
   localStorage.setItem("indexData", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("indexData"));

document.getElementById("introH1").innerHTML = data.intro.heading;
document.getElementById("introParagraph").innerHTML = data.intro.paragraph;
document.getElementById("whySl_h").innerHTML = data.why_sri_lanka.heading;
document.getElementById("whySl_p").innerHTML = data.why_sri_lanka.paragraph;

document.getElementById("yala_title").innerHTML = data.safari_options[0].title;
document.getElementById("yalaImg").src = data.safari_options[0].image;
document.getElementById("yala_subtitle").innerHTML =
  data.safari_options[0].subtitle;
document.getElementById("yala_para").innerHTML =
  data.safari_options[0].description;

document.getElementById("udawalawa_title").innerHTML =
  data.safari_options[1].title;
document.getElementById("udawalawaImg").src = data.safari_options[1].image;
document.getElementById("udawalawa_subtitle").innerHTML =
  data.safari_options[1].subtitle;
document.getElementById("udawalawa_para").innerHTML =
  data.safari_options[1].description;
document.getElementById("udawalawa_price").innerHTML =
  data.safari_options[1].prices;

document.getElementById("mirissa_title").innerHTML =
  data.safari_options[2].title;
document.getElementById("mirissaImg").src = data.safari_options[2].image;
document.getElementById("mirissa_subtitle").innerHTML =
  data.safari_options[2].subtitle;
document.getElementById("mirissa_para").innerHTML =
  data.safari_options[2].description;
document.getElementById("mirissa_price").innerHTML =
  data.safari_options[2].prices;



  