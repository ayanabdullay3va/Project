let row = document.querySelector(".row");
let singerURL = "http://localhost:3000/singer";
axios(singerURL).then((res) => {
  let datas = res.data;
  datas.forEach((data) => {
    row.innerHTML += ` <div class="card h-100" style="display:flex; flex-wrap:wrap;margin:0 auto; padding: 30px;" >
        <img src="${data.image}" class="card-img-top" style="height:400px"; alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p >${data.Birthplace}</p>
            <button type="button" class="btn btn-outline-info"><a href="./detail.html?id=${data.id}">Detail</a></button>
            <button type="button" class="btn btn-outline-danger"><a href=""><i class="fa-solid fa-trash"
                        style="color: #ff0000;"></i></a></button>
            <button type="button" id="${data.id}" class="btn  btn-outline-danger btnFav"><a href=""><i class="fa-solid btnFav fa-heart"
                        style="color: #ff0000;"></i></a></button>
        </div>
    </div>`;
  });

  let wishData = JSON.parse(localStorage.getItem("wish"));
  console.log(wishData);
  let wishArr = [];
  if (wishData) {
    wishArr = wishData;
  }
  let btnFav = document.querySelectorAll(".btnFav");
  btnFav.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();

      console.log(this.id);
      wishArr.push(datas.find((data) => data.id == this.id));
      localStorage.setItem("wish", JSON.stringify(wishArr));
    });
  });
});
