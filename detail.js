$(document).ready(function () {
  function getURLparams() {
    return new URLSearchParams(window.location.search);}
  const params = getURLparams();
  const name = params.get("name");
  const price = params.get("price");
  const img = params.get("image");
  $("#image").attr("src", `./${img}`);
  $("#price").text(price + "€" );
  $("#title").append(name);});
