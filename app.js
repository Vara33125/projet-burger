const box = $("#boxes");
$("#but").on("click", function () {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $("#but").text("Dark");
  } else {
    $("body").addClass("dark");
    $("#but").text("Light");
  }
});
const burgerCard = fetch("https://titi.startwin.fr/products/type/burger")
  .then((response) => response.json())
  .then((toto) => {
    toto.forEach((element) => {
      const imagePath = element.image.replace(/\\/g, "/");
      let name = element.name;
      let prix = element.price.$numberDecimal;
      const carteHTML = `
      <div class="card col-md-4 m-3" style="width: 25rem;">
      <a class ="text-dark text-decoration-none" href="detail.html?name=${name}&price=${prix}&image=${imagePath}">
      <img style=' height: 400px' src="./${imagePath}" class="card-img-top" alt="burger">
      <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.description}</p>
      <p href="#" class="">${element.price.$numberDecimal} €</p>
      </div></a>
      </div>
      `;
      box.append(carteHTML);
    });
  });
const accompagnementCard = fetch(
  "https://titi.startwin.fr/products/type/accompagnement"
)
  .then((response) => response.json())
  .then((toto) => {
    toto.forEach((element) => {
      let imagePath = element.image.replace(/\\/g, "/");
      let name = element.name;
      let prix = element.price.$numberDecimal;
      console.log(imagePath);
      const carteHTML = `
      <div class="card col-md-4 m-3" style="width: 25rem;">
      <a class ="text-dark text-decoration-none" href="detail.html?name=${name}&price=${prix}&image=${imagePath}">
      <img style=' height: 400px' src="./${imagePath}" class="card-img-top" alt="${element.name}">
      <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.description}</p>
      <p href="#" class="">${element.price.$numberDecimal} €</p>
      </div></a>
      </div>
      `;
      $("#acc").append(carteHTML);
    });
  });

const dessertCard = fetch("https://titi.startwin.fr/products/type/dessert")
  .then((response) => response.json())
  .then((toto) => {
    toto.forEach((element) => {
      let imagePath = element.image.replace(/\\/g, "/");
      let name = element.name;
      let prix = element.price.$numberDecimal;
      console.log(imagePath);
      const carteHTML = `
      <div class="card col-md-4 m-3" style="width: 25rem;">
      <a class ="text-dark text-decoration-none" href="detail.html?name=${name}&price=${prix}&image=${imagePath}">
      <img style=' height: 400px' src="./${imagePath}" class="card-img-top" alt="${element.name}">
      <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.description}</p>
      <p href="#" class="">${element.price.$numberDecimal} €</p>
      </div></a>
      </div>
      `;
      $("#desert").append(carteHTML);
    });
  });
  const drinkCard = fetch("https://titi.startwin.fr/products/type/boisson")
  .then((response) => response.json())
  .then((toto) => {
    toto.forEach((element) => {
      let imagePath = element.image.replace(/\\/g, "/");
      let name = element.name;
      let prix = element.price.$numberDecimal;
      console.log(imagePath);
      const carteHTML = `
      <div class="card col-md-4 m-3" style="width: 25rem;">
      <a class ="text-dark text-decoration-none" href="detail.html?name=${name}&price=${prix}&image=${imagePath}">
      <img style=' height: 400px' src="./${imagePath}" class="card-img-top" alt="${element.name}">
      <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.description}</p>
      <p href="#" class="">${element.price.$numberDecimal} €</p>
      </div></a>
      </div>
      `;
      $("#drink").append(carteHTML);
    });
  });
