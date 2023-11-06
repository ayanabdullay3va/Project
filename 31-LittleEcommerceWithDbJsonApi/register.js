let formSubmit = document.querySelector("form");
let nameInp = document.querySelector("#nameInp");
let emailInp = document.querySelector("#emailInp");
let passInp = document.querySelector("#passInp");
let balanceInp = document.querySelector("#balanceInp");
let btnsign = document.querySelector(".btnsign");
let url = "http://localhost:3000/users";
formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  axios.get(url).then((result) => {
    let find = result.data.find((x) => x.name == nameInp.value);
    if (find) {
      Swal.fire({
        icon: "sucess",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } else if (nameInp.value.length <= 3) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "mething went wrongSo!",
      });
    } else if (balanceInp.value <= 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "mething went wrongSo!",
      });
    } else {
      window.location.href = "login.html";
      fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: nameInp.value,
          email: emailInp.value,
          password: passInp.value,
          balance: balanceInp.value,
          orders: [],
        }),
      })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (res) {
          console.log(res);
        });
      nameInp.value = "";
      emailInp.value = "";
      passInp.value = "";
      balanceInp.value = "";
    }
  });
});
