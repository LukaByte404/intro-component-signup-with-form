const inputies = document.querySelectorAll("input");
const form = document.querySelector("form");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputies === "") {
    console.log("error");
  }
});
