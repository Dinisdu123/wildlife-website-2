document.addEventListener("DOMContentLoaded", function () {
  const newsletter = document.getElementById("NewsletterForm");

  newsletter.addEventListener("submit", function (event) {
    event.preventDefault();

    const Emails = document.getElementById("email").value;

    let RegisterEmails = localStorage.getItem("RegisterEmails");
    if (!RegisterEmails) {
      RegisterEmails = [];
    } else {
      RegisterEmails = JSON.parse(RegisterEmails);
    }

    RegisterEmails.push(Emails);
    localStorage.setItem("RegisterEmails", JSON.stringify(RegisterEmails));

    alert("Thank you for joining with us!!");

    // Clear the input field after subscribing
    document.getElementById("email").value = "";
  });
});
