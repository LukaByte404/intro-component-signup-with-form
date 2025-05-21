console.log("javascript is runnig correctly");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submmited");
  validateForm();
});

const validateForm = () => {
  const inputs = [
    {
      field: document.querySelector(".fName"),
      error: document.querySelector(".name-error-1"),
      errorImg: document.querySelector(".error-img1"),
    },
    {
      field: document.querySelector(".lName"),
      error: document.querySelector(".name-error-2"),
      errorImg: document.querySelector(".error-img2"),
    },
    {
      field: document.querySelector(".email"),
      error: document.querySelector(".email-error"),
      error2: document.querySelector(".email-error-2"),
      errorImg: document.querySelector(".error-img3"),
    },
    {
      field: document.querySelector(".password"),
      error: document.querySelector(".password-error"),
      errorImg: document.querySelector(".error-img4"),
    },
  ];

  inputs.forEach(({ field, error, error2, errorImg }) => {
    const value = field.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    error.style.display = "none";
    if (error2) error2.style.display = "none";
    field.classList.remove("border-error");
    errorImg.style.display = "none";
    field.classList.remove("email-error-text");

    if (value === "") {
      error.style.display = "block";
      field.classList.add("border-error");
      errorImg.style.display = "block";
      return;
    }

    if (field.classList.contains("email") && !emailRegex.test(value)) {
      if (error2) error2.style.display = "block";
      field.classList.add("border-error");
      field.classList.add("email-error-text");
      errorImg.style.display = "block";
    }
  });
};
