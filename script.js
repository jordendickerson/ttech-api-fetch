const url =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

const cardsContainer = document.querySelector(".cards");

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    let business = jsObject.business;
    console.log(jsObject.business);
    for (let i = 0; i < business.length; i++) {
      console.log(business[i].name);
      // You must include your javascript below to display the following information:
      cardsContainer.innerHTML += `
      <section class="card">
      <div class="left">
        <h2>${business[i].name}</h2>
          <p>${business[i].description}</p>
          </div>
        <div class="right">
          <img src="${business[i].imageurl}" alt="business card image" />
        </div>
        <address>${business[i].address}</address>
      </section>
      `;
    }
  });
