let content;
document.addEventListener("DOMContentLoaded", function () {
  const editButtons = document.querySelectorAll(".editButtons");

  editButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.classList.contains("editButtons")) {
        const dataKey = this.value;
        const data = localStorage.getItem(dataKey);
        if (data) {
          localStorage.setItem("currentData", data);
          localStorage.setItem("dataKey", dataKey);
          window.open("popup.html", "popup", "width=800,height=730");
        } else {
          alert("No data found for this button.");
        }
      }
    });
  });

  const dataKey = localStorage.getItem("dataKey");
  const currentContent = localStorage.getItem(dataKey);
  const textarea = document.getElementById("textareapp");
  textarea.value = currentContent;
});

document.addEventListener("DOMContentLoaded", function () {
  const textareapp = document.getElementById("textareapp");
  const saveButton = document.getElementById("save");
  const savedData = localStorage.getItem("currentData");
  if (savedData) {
    textareapp.value = savedData;
  }

  const editButtonValue = localStorage.getItem("editButtonValue");
  if (editButtonValue) {
    textareapp.value = localStorage.getItem(editButtonValue);
  }

  saveButton.addEventListener("click", function () {
    const newData = textareapp.value;
    const editButtonValue = localStorage.getItem("editButtonValue");
    localStorage.setItem(editButtonValue, newData);
    localStorage.setItem(localStorage.getItem("dataKey"), newData);
    // Alert
    alert("Changes have been saved successfully!");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    console.log("button : ok");

    let registerEmails = localStorage.getItem("RegisterEmails");
    if (!registerEmails) {
      emailList.textContent = "No emails found in local storage";
      console.log("No email found");
      return;
    }
    registerEmails = JSON.parse(registerEmails);
    emailList.textContent = "";
    for (const email of registerEmails) {
      const listItem = document.createElement("li");
      listItem.textContent = email;
      emailList.appendChild(listItem);
    }
  });
});
