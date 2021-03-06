WebFont.load({
  google: {
    families: ["Lato"],
  },
  typekit: {
    families: ["Aller"],
  },
});

const requestURL =
  "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];

    prophets.forEach((prophet) => {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let pd = document.createElement("p");
      let pp = document.createElement("p");
      let image = document.createElement("img");

      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      pd.textContent = `Date of Birth: ${prophet.birthdate}`;
      pp.textContent = `Place of Birth: ${prophet.birthplace}`;
      image.setAttribute("src", prophet.imageurl);
      image.setAttribute(
        "alt",
        `${prophet.name} ${prophet.lastname} - ${prophet.order}`
      );

      card.appendChild(h2);
      card.appendChild(pd);
      card.appendChild(pp);
      card.appendChild(image);

      document.querySelector("div.cards").appendChild(card);
    });

    /*
    const utahfilter = prophets.filter(prophet => prophet.birthplace == "Utah");
    utahfilter.forEach(utahprophet => {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      h2.textContent = `${utahprophet.name} ${utahprophet.lastname}`;
      card.appendChild(h2);
      document.querySelector("div#filtered").appendChild(card);
      //etc
    });
    */

  });
