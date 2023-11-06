let container = document.querySelector(".container");
let arrFav = [];
let arrLocalFav = JSON.parse(localStorage.getItem("basket"));
if (arrLocalFav) {
  arrFav = arrLocalFav;
}
console.log(arrFav);
arrFav.forEach((data) => {
  container.innerHTML += `  <div class="box"
  style="width: 100%; height: 100px;box-sizing: border-box;margin:5px auto; padding: 20px; display: flex; justify-content: space-between; box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;">
  <img src="${data.image}" alt="" style="width: 60px; height: 60px;">
  <b>
  ${data.name}</b>
  <b>
  ${data.price}</b>

  <button type="button" class="btn btndelete btn-outline-danger">Delete</button>
</div>`;
});
