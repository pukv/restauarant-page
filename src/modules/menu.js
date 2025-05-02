export function loadMenuPage() {
  const content = document.querySelector("#content");

  content.innerHTML = "";
  document.body.classList.remove("bg-image-main");
  document.body.classList.add("bg-image");

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title-container");
  content.append(titleContainer);

  const title = document.createElement("h1");
  title.textContent = `Republic Food`;
  title.classList.add("menu-title");
  titleContainer.appendChild(title);

  const secondaryTitle = document.createElement("p");
  secondaryTitle.textContent = "going strong since 2025";
  secondaryTitle.classList.add("secondary-title");
  titleContainer.appendChild(secondaryTitle);
  const hrElement = document.createElement("hr");
  hrElement.classList.add("big-hr");
  titleContainer.appendChild(hrElement);

  const smashBurgerTitle = document.createElement("h1");
  smashBurgerTitle.textContent = `Smash Burgers`;
  smashBurgerTitle.classList.add("menu-title");
  titleContainer.appendChild(smashBurgerTitle);

  const secondarySmashTitle = document.createElement("p");
  secondarySmashTitle.textContent = "100% grass fed beef";
  secondarySmashTitle.classList.add("secondary-title");
  titleContainer.appendChild(secondarySmashTitle);
  const hrEl = document.createElement("hr");
  hrEl.classList.add("big-hr");
  titleContainer.appendChild(hrEl);

  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");
  content.append(itemContainer);

  const classic = document.createElement("h2");
  classic.textContent = "Classic";
  classic.classList.add("item-title");
  itemContainer.appendChild(classic);

  const classicCondiments = document.createElement("p");
  classicCondiments.textContent = "mustard, ketchup, pickles, green salad";
  classicCondiments.classList.add("condiments");
  itemContainer.appendChild(classicCondiments);

  const classicPrice = document.createElement("span");
  classicPrice.textContent = "5.99$";
  classicPrice.classList.add("price");
  itemContainer.appendChild(classicPrice);

  const eggCheddar = document.createElement("h2");
  eggCheddar.textContent = "Egg Cheddar";
  eggCheddar.classList.add("item-title");
  itemContainer.appendChild(eggCheddar);

  const eggCheddarCondiments = document.createElement("p");
  eggCheddarCondiments.textContent = `Garlic mayo, crispy bacon, cheddar sauce, grilled egg, onions`;
  eggCheddarCondiments.classList.add("condiments");
  itemContainer.appendChild(eggCheddarCondiments);

  const eggCheddarPrice = document.createElement("span");
  eggCheddarPrice.textContent = "7.99$";
  eggCheddarPrice.classList.add("price");
  itemContainer.appendChild(eggCheddarPrice);

  const holyCheesus = document.createElement("h2");
  holyCheesus.textContent = "Holy Cheesus";
  holyCheesus.classList.add("item-title");
  itemContainer.appendChild(holyCheesus);

  const holyCheesusCondiments = document.createElement("p");
  holyCheesusCondiments.textContent = `smash beef, cheddar cheese, bbq honey, burger sauce, onion, pickle, jalapeno`;
  holyCheesusCondiments.classList.add("condiments");
  itemContainer.appendChild(holyCheesusCondiments);

  const holyCheesusPrice = document.createElement("span");
  holyCheesusPrice.textContent = `9.99$`;
  holyCheesusPrice.classList.add("price");
  itemContainer.appendChild(holyCheesusPrice);
}
