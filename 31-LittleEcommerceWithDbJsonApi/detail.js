let carddetails = document.querySelector(".carddetails");
let id = new URLSearchParams(location.search).get("id");
console.log(id);
axios("  http://localhost:3000/singer").then((res) => {
  let datas = res.data;
  let element = datas.find((element) => element.id == id);
  console.log(element);
  carddetails.innerHTML = `
 <div class="card-body"  style="width: 30%; height: 600px; margin: 0 auto; box-shadow: rgba(86, 161, 25, 0.25) 0px 50px 100px -20px, rgba(86, 161, 25, 0.25) 0px 30px 60px -30px; ">
     <img src="${element.image}" style="width: 100%; height: 300px;" alt="">
   <p>Name: ${element.name}</p>
   <p>Age: ${element.age}</p>
   <p>Birthplace: ${element.Birthplace}</p>
   <p>Genre: ${element.Genre}</p>
   <button type="button" class="btn btn-success"><a href="./index.html">Back</a></button>
 </div>`;
});
