let row = document.querySelector(".row");
let MealsURL = "  http://localhost:3000/meals";
axios(MealsURL).then((res) => {
  let datas = res.data;
  datas.forEach((data) => {
    row.innerHTML += ` <div class="card h-100" style="display:flex; flex-wrap:wrap;margin:0 auto; padding: 30px;" >
        <img src="${data.image}" class="card-img-top" style="height:400px"; alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p >${data.price}</p>
            <button type="button" class="btn btn-outline-info"><a href="./mealsdetails.html?id=${data.id}">Detail</a></button>
            <button type="button" class="btn btn-outline-danger basketBtn"  name="${data.id}" ><a href="./basket.html"><i class="fa-solid fa-cart-shopping"
                        style="color: #ff0000;"></i></a></button>
            <button type="button" id="${data.id}" class="btn  btn-outline-danger"><a href="./wishlist.html"><i class="fa-solid btnFav fa-heart"
                        style="color: #ff0000;"></i></a></button>
        </div>
    </div>`;
  });
  let basket = document.querySelectorAll(".basketBtn");
  let basketArr = [];
  let localBasketArr = JSON.parse(localStorage.getItem("basket"));
  if (localBasketArr) {
    basketArr = [...localBasketArr];
  }
  for (let basketBtn of basket) {
    basketBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      console.log(this.name);
      basketArr.push(datas[this.name]);
      localStorage.setItem("basket", JSON.stringify(basketArr));
    });
  }
});
