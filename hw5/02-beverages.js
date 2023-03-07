const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

let app = document.querySelector("#results");

const addElements = (drink) => {
  let element = document.createElement("div");
  let image = document.createElement("img");
  let bevarge = document.createElement("div");

  image.src = drink.strDrinkThumb;
  image.style.width = "150px";
  image.style.height = "150px";
  image.alt = "Image of " + drink.strDrink;
  bevarge.textContent = drink.strDrink;

  element.style.margin = "10px";
  element.style.paddingBottom = "0px";
  element.style.paddingTop = "10px";
  element.style.marginLeft = "10px";
  element.style.marginRight = "10px";
  element.className = "figure";
  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.alignItems = "center";
  element.style.width = "180px";

  bevarge.style.paddingBottom = "10px";
  bevarge.style.paddingTop = "30px";
  bevarge.style.marginLeft = "25px";
  bevarge.style.marginRight = "25px";
  bevarge.style.fontWeight = "bold";
  bevarge.style.fontSize = "20px";

  element.appendChild(image);
  element.appendChild(bevarge);

  app.append(element);
};

const fetchData = (url) => {
  // Add your code here

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.drinks.forEach((drink) => {
        addElements(drink);
      });
    })
    .catch((error) => {
      console.error(error);

      let element = document.createElement("div");
      element.textContent = "An error occured. Please try again.";
      app.append(element);
    })
    .finally(() => {
      let loader = document.querySelector("#loading");
      app.removeChild(loader);
    });
};

fetchData(url);
