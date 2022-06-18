document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
  let drink = document.querySelector("input").value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.drinks);
      let counter = 1;
      data.drinks.forEach((drink) => {
        document.querySelector(
          ".num"
        ).innerHTML += `<a href="#slide-${counter}">${counter}</a>`;
        document.querySelector(
          ".slides"
        ).innerHTML += ` <div id="slide-${counter}">
    <div class="content">
      <h1>${drink.strDrink}</h1>
      <img src="${drink.strDrinkThumb}" alt="" />
      <p>${drink.strInstructions}</p>
    </div>`;
        counter++;
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
