//? GLOBAL VARIABLES
const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const authorizationKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlMTM0MzM5N2RmMTAwMTRkZGRkYmEiLCJpYXQiOjE2ODYwNzQ0OTcsImV4cCI6MTY4NzI4NDA5N30.ziCXXGz8TJyrXAkh6YuUM16bLexLr6vAdcAarST6joc";

const productsContainer = document.querySelector("#productsContainer");

window.onload = getData();

//! di seguito > FUNZIONE PER FARE LA CHIAMATA ALL'ENDPOINT E CHIAMARE LA FUNZIONE PER GENERARE IL TEMPLATE PRODOTTI
async function getData() {
  const result = await fetch(endpoint, {
    headers: {
      Authorization: authorizationKey,
    },
  });
  const json = await result.json();
  console.log(json);

  json.forEach((element) => {
    generateElTemp(element);
  });
}

//! di seguito > FUNZIONE PER CREARE IL TEMPLATE (CARD) DEL PRODOTTO
function generateElTemp(element) {
  const elementId = element._id;

  const singleProdContainer = document.createElement("div");

  singleProdContainer.classList.add(
    "col-12",
    "col-md-4",
    "col-lg-3",
    "card-container"
  );

  const singleProdCard = document.createElement("div");
  singleProdCard.classList.add("card", "m-0");
  const productImg = document.createElement("img");
  productImg.classList.add("card-img-top");
  productImg.alt = element.name;
  productImg.src = element.imageUrl;

  const productBody = document.createElement("div");
  productBody.classList.add("card-body");

  const productTitle = document.createElement("h6");
  productTitle.classList.add("card-title");
  productTitle.innerHTML = element.name;

  const productInfo = document.createElement("p");
  productInfo.classList.add("card-text");
  productInfo.id = "cardDescription";
  productInfo.innerHTML = element.description;

  const productPrice = document.createElement("p");
  productPrice.classList.add("card-text", "card-price", "mt-4", "me-2");
  productPrice.innerHTML = `€ ${element.price.toFixed(2)}`;

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("d-flex", "justify-content-between");

  const productBtn = document.createElement("a");
  productBtn.classList.add("btn", "btn-outline-primary");
  productBtn.href = "#";
  productBtn.innerHTML = `Add to Cart <i class="bi bi-cart"></i>`;

  const cardSeeMoreBtn = document.createElement("a");
  cardSeeMoreBtn.classList.add("btn", "btn-outline-success");
  cardSeeMoreBtn.href = "./product.html" + `?id=${element._id}`;
  const cardSeeMoreIcon = document.createElement("i");
  cardSeeMoreIcon.classList.add("bi", "bi-eye");
  cardSeeMoreBtn.append(cardSeeMoreIcon);

  cardFooter.append(cardSeeMoreBtn, productBtn);

  productBody.append(productTitle, productInfo, productPrice, cardFooter);
  singleProdCard.append(productImg, productBody);

  singleProdContainer.append(singleProdCard);
  productsContainer.append(singleProdContainer);
}

//! di seguito > FUNZIONE PER RECUPERARE L'ID NELL'URL E LANCIARE LA FUNZIONE PER APRIRE IL DETTAGLIO DEL PRODOTTO IN UN'ALTRA PAGINA
const prodDetailedBox = document.querySelector(".productDetailed");

if (window.location.search) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  fetch(endpoint + id, {
    headers: {
      Authorization: authorizationKey,
    },
  })
    .then((raw) => raw.json())
    .then((product) => productDetailed(product))
    .catch((error) => {
      console.log("HTTP error: ", error);
      alert(`HTTP error: ${error}`);
    });
}

function productDetailed(product) {
  console.log(product);

  const prodDetailsContainer = document.createElement("div");
  prodDetailsContainer.classList.add("row", "gap-5");
  const prodImgContainer = document.createElement("div");
  prodImgContainer.classList.add("imageDetailed", "col-12", "col-md-6");
  const prodImgWrapper = document.createElement("img");
  prodImgWrapper.src = product.imageUrl;

  prodImgContainer.append(prodImgWrapper);

  //------------------------------------------------------------

  const prodInfoContainer = document.createElement("div");
  prodInfoContainer.classList.add("col-12", "col-md-6", "infoDetailed");

  const infoBrand = document.createElement("h6");
  infoBrand.innerHTML = `<span class="fw-normal">Brand:</span> ${product.brand}`;

  const infoTitle = document.createElement("h2");
  infoTitle.innerHTML = product.name;

  const infoDesc = document.createElement("p");
  infoDesc.innerHTML = product.description;

  const infoId = document.createElement("p");
  infoId.classList.add("infoIdDetailed");
  infoId.innerHTML = `COD: ${product._id}`;

  const infoDivider = document.createElement("hr");
  infoDivider.classList.add("divider");

  const infoDeliveryBox = document.createElement("div");
  infoDeliveryBox.classList.add("d-flex", "gap-3", "align-items-center");
  const infoDelieryIcon = document.createElement("i");
  infoDelieryIcon.classList.add("bi", "bi-truck");
  const infoDeliveryText = document.createElement("p");
  infoDeliveryText.classList.add("m-0");
  infoDeliveryText.innerHTML = `Home Delivery: <span class="text-success">Available</span>`;
  infoDeliveryBox.append(infoDelieryIcon, infoDeliveryText);

  const infoPickupBox = document.createElement("div");
  infoPickupBox.classList.add("d-flex", "gap-3", "align-items-center");
  const infoPickupIcon = document.createElement("i");
  infoPickupIcon.classList.add("bi", "bi-shop");
  const infoPickupText = document.createElement("p");
  infoPickupText.classList.add("m-0");
  infoPickupText.innerHTML = `Pickup at Store: <span class="text-danger">Not Available</span>`;
  infoPickupBox.append(infoPickupIcon, infoPickupText);

  const infoPrice = document.createElement("h3");
  infoPrice.classList.add("infoPrice");
  infoPrice.innerHTML = `€ ${product.price.toFixed(2)}`;

  const infoAddCartBtn = document.createElement("button");
  infoAddCartBtn.classList.add("btn", "btn-outline-danger");
  infoAddCartBtn.innerHTML = "ADD TO CART";

  const infoDiscordBox = document.createElement("div");
  infoDiscordBox.classList.add("infoDiscordBox");
  const infoDiscordIcon = document.createElement("i");
  infoDiscordIcon.classList.add("bi", "bi-discord");

  const infoDiscordTextBox = document.createElement("div");
  infoDiscordTextBox.classList.add("infoDiscordTextBox", "mx-auto");
  const infoDiscordTextRowOne = document.createElement("p");
  infoDiscordTextRowOne.classList.add("discordRowOne", "m-0");
  infoDiscordTextRowOne.innerHTML = "Need Help ?";
  const infoDiscordTextRowTwo = document.createElement("p");
  infoDiscordTextRowTwo.classList.add("discordRowTwo", "m-0");
  infoDiscordTextRowTwo.innerHTML = "JOIN US ON DISCORD!";
  infoDiscordTextBox.append(infoDiscordTextRowOne, infoDiscordTextRowTwo);

  infoDiscordBox.append(infoDiscordIcon, infoDiscordTextBox);

  prodInfoContainer.append(
    infoBrand,
    infoTitle,
    infoDesc,
    infoId,
    infoDivider,
    infoDeliveryBox,
    infoPickupBox,
    infoPrice,
    infoAddCartBtn,
    infoDiscordBox
  );

  prodDetailsContainer.append(prodImgContainer, prodInfoContainer);
  prodDetailedBox.append(prodDetailsContainer);
}
