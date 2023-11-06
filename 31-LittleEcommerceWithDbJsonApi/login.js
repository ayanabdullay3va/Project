let loginForm = document.querySelector(".loginform");
let usernameInp = document.querySelector("#usernameInp");
let passInp = document.querySelector("#passInp");
let loginBtn = document.querySelector(".loginbtn");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  axios
    .get(" http://localhost:3000/users")
    .then((result) => {
      let found = result.data.find(
        (x) => x.usernameInp == usernameInp.value && x.passInp == passInp.value
      );
      if (found) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            isLoged: true,
            UserID: found.ID,
          })
        );
        Swal.fire({
          icon: "sucess",
          title: "Oops...",
          text: "Something went wrong!",
        });
        window.location.href = "index.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "mething went wrongSo!",
        });
        window.location.href = "index.html";
      }
      usernameInp.value = "";
      passInp.value = "";
    })

    .catch((err) => {});
 
});
