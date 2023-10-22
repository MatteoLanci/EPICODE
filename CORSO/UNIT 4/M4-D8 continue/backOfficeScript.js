//? GLOBAL VARIABLES
const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const authorizationKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlMTM0MzM5N2RmMTAwMTRkZGRkYmEiLCJpYXQiOjE2ODYwNzQ0OTcsImV4cCI6MTY4NzI4NDA5N30.ziCXXGz8TJyrXAkh6YuUM16bLexLr6vAdcAarST6joc";

const productsContainer = document.querySelector("#productsContainer");

const newProdNameInput = document.querySelector("#newProdName");
const newProdDescInput = document.querySelector("#newProdDesc");
const newProdBrandInput = document.querySelector("#newProdBrand");
const newProdPriceInput = document.querySelector("#newProdPrice");
const newProdImgInput = document.querySelector("#newProdImgUrl");
const newProdBtn = document.querySelector("#createNewProduct");

const editNameInput = document.querySelector("#editName");
const editDescInput = document.querySelector("#editDesc");
const editBrandInput = document.querySelector("#editBrand");
const editPriceInput = document.querySelector("#editPrice");
const editImg = document.querySelector("#editImgUrl");
const editProdBtn = document.querySelector("#editProduct");

const backOfficeElsBox = document.querySelector("#backOfficeElsBox");

window.onload = getData();

//! di seguito > FUNZIONE PER FARE LA CHIAMATA ALL'ENDPOINT E GENERARE IL TEMPLATE PRODOTTI
async function getData() {
  backOfficeElsBox.innerHTML = "";
  const result = await fetch(endpoint, {
    headers: {
      Authorization: authorizationKey,
    },
  });
  const json = await result.json();
  console.log(json);

  json.forEach((element) => {
    backOfficeEl(element);
  });
}

//! di seguito > FUNZIONE PER CREARE IL TEMPLATE DEL PRODOTTO NELLA PAGINA DI GESTIONE

async function backOfficeEl(element) {
  const elementId = element._id;

  const elTr = document.createElement("tr");
  elTr.setAttribute("data-id", `${element._id}`);

  const elImgContainer = document.createElement("td");
  const elImg = document.createElement("img");
  elImg.src = element.imageUrl;
  elImg.id = "elImgDb";
  elImgContainer.append(elImg);

  const elName = document.createElement("td");
  elName.innerHTML = element.name;

  const elBrand = document.createElement("td");
  elBrand.innerHTML = element.brand;

  const elPrice = document.createElement("td");
  elPrice.innerHTML = `€ ${element.price.toFixed(2)}`;

  const elDesc = document.createElement("td");
  const elDescBox = document.createElement("p");
  elDescBox.classList.add("backOfficeDesc");
  elDesc.append(elDescBox);
  elDescBox.innerHTML = element.description;

  const elActions = document.createElement("td");
  const elActionsContainer = document.createElement("div");
  elActionsContainer.classList.add("backOfficeBtnContainer");
  const elEditBtn = document.createElement("i");
  elEditBtn.classList.add("bi", "bi-pencil");
  elEditBtn.setAttribute("type", "button");
  elEditBtn.setAttribute("data-bs-toggle", "modal");
  elEditBtn.setAttribute("data-bs-target", "#modalEdit");
  elEditBtn.addEventListener("click", () =>
    editModal(
      element._id,
      element.name,
      element.description,
      element.brand,
      element.price,
      element.imageUrl
    )
  );
  const elDelBtn = document.createElement("i");
  elDelBtn.classList.add("bi", "bi-trash");
  elDelBtn.addEventListener("click", () => {
    delProd(elementId);
  });

  elActionsContainer.append(elEditBtn, elDelBtn);
  elActions.append(elActionsContainer);

  elTr.append(elImgContainer, elName, elBrand, elPrice, elDesc, elActions);
  backOfficeElsBox.append(elTr);
}

//! di seguito > FUNZIONE PER AGGIUNGERE UN NUOVO PRODOTTO AL 'DB'
newProdBtn.addEventListener("click", addNewProd);

async function addNewProd() {
  if (
    newProdNameInput &&
    newProdDescInput &&
    newProdBrandInput &&
    newProdPriceInput &&
    newProdImgInput
  ) {
    const payload = {
      name: newProdNameInput.value,
      description: newProdDescInput.value,
      brand: newProdBrandInput.value,
      price: newProdPriceInput.value,
      imageUrl: newProdImgInput.value,
    };

    const generateResult = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: authorizationKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    getData();
    backOfficeEl();

    newProdNameInput.value = "";
    newProdDescInput.value = "";
    newProdBrandInput.value = "";
    newProdPriceInput.value = "";
    newProdImgInput.value = "";
  } else {
    alert("please fill in all required fields");
  }
}

//! di seguito > FUNZIONE PER EDITARE IL PRODOTTO NEL 'DB'
async function editModal(
  productId,
  productName,
  productDesc,
  productBrand,
  productPrice,
  productImg
) {
  editNameInput.value = productName;
  editDescInput.value = productDesc;
  editBrandInput.value = productBrand;
  editPriceInput.value = productPrice;
  editImg.value = productImg;

  editProdBtn.addEventListener("click", () => {
    editProd(productId);
  });
}

async function editProd(productId) {
  const payload = {
    name: editNameInput.value,
    description: editDescInput.value,
    brand: editBrandInput.value,
    price: editPriceInput.value,
    imageUrl: editImg.value,
  };

  const editRes = await fetch(endpoint + productId, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      Authorization: authorizationKey,
      "Content-Type": "application/json",
    },
  });

  if (editRes.ok) {
    getData();
    location.reload();
  } else {
    alert("Something went wrong!");
  }
}

//! di seguito > FUNZIONE PER ELIMINARE IL PRODOTTO DAL 'DB'
async function delProd(elementId) {
  try {
    const delRes = await fetch(endpoint + elementId, {
      method: "DELETE",
      headers: {
        Authorization: authorizationKey,
      },
    });
    getData();
  } catch (error) {
    console.log(error);
  }
}
