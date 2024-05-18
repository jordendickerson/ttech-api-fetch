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
      // 1. business names, 2.business image,
      // 3. business locations, 4. business descriptions
      cardsContainer.innerHTML += `
      <section class="card">
        <h2>${business[i].name}</h2>
        <p>${business[i].description}</p>
        <img src="${business[i].imageurl}" alt="business card image" />
        <address>${business[i].address}</address>
      </section>
      `;
      // Here is an example for the name to start you off.
      // Creates card and places business name in h2 element
      // Adds a classname to the section element above
      // Create the image location, you can look up how to add image using javascript
      // Include a business location
      // Include a business Description
    }
  });
