let arrFav = [];
let table = document.querySelector(".table");
let arrLocalFav = JSON.parse(localStorage.getItem("wish"));
if (arrLocalFav) {
  arrFav = arrLocalFav;
}
arrFav.forEach((data) => {
  table.innerHTML += `<thead class="table-dark">
   
  </thead>
  <tbody>
    <tr>
      <th scope="row">${data.id}</th>
      <td class="width:50px; height:"50px"><img style="height: 60px; width: 60px;" src="${data.image}" alt=""></td>
      <td>${data.name}</td>
      <td>${data.age}</td>
      <td>${data.Genre}</td>
      <td> <button type="button" class="btn fav btn-outline-danger"><a href=""><i class="fa-solid favIcon fa-trash"
          style="color: #ff0000;"></i></a></button></td>
    </tr>
    </tbody>`;
  let favIcon = document.querySelectorAll(".favIcon");

  let arrLocalFav = JSON.parse(localStorage.getItem("wish"));

  if (arrLocalFav) {
    arrFav = arrLocalFav;
  }
  for (let icon of favIcon) {
    icon.addEventListener("click", function () {
      arrLocalFav = arrFav.filter(
        (data) => data.id != this.getAttribute("name")
      );
      localStorage.setItem("wish", [...JSON.stringify(arrFav)]);
    });
  }
});
