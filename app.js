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
      <img style=' height: 500px' src="./${imagePath}" class="card-img-top" alt="burger">
      <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.description}</p>
      <p href="#" class="">${element.price.$numberDecimal}</p>
      </div></a>
      </div>
      `;
      box.append(carteHTML);
    });
  });
      

     

//   const searchURL = 'https://titi.startwin.fr/products/type/burger';
//   console.log(element._id);
//   $(".card").on("click", function () {
//     return window.location.assign(
//       `detail.html?name=${name}&price=${prix}&image=${image}`
//     );
//   });
//             $.get(searchURL, {key: `${element._id}`
//             }).done(function(element){
//                 let names = element.name;
//                     element._id.forEach(function(element) {
//                     let nameDiv = $('<li>');
//                     nameDiv.html(names);
//                     $('boxes').append(nameDiv);
//                 });
//             });
