WebFont.load({
  google: {
    families: ["Lato"],
  },
  typekit: {
    families: ["Aller"],
  },
});

function classSet(section, param) {
  thing = document.getElementById("demonstration").classList;
  thing.remove(`${section}-1`, `${section}-2`, `${section}-3`, `${section}-4`);
  thing.add(`${section}-${param}`);
}

function clickedToggle() {
  document.getElementById("demonstration").classList.toggle("clicked");
}
