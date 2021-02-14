WebFont.load({
  google: {
    families: ["Lato"]
  },
  typekit: {
    families: ["Aller"]
  }
});

function classToggle(which) {
  // switch(which) {
  //   case 1:
  //     section="color"
  //     break;
  //   case 2:
  //     section="font-size"
  //     break;
  //   case 3:
  //     section="transform"
  //     break;
  //   case 4:
  //     section="height-width"
  //     break;
  // }

  // document.getElementById(section).classList.toggle("clicked");

  document.getElementById(which).classList.toggle("clicked");

}