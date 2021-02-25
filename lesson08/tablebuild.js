WebFont.load({
  google: {
    families: ["Ubuntu:300,400,700"],
  },
});

footerDate = new Date(document.lastModified);

document.getElementById('footer-date').textContent = (footerDate.getMonth() + 1) + "." + footerDate.getDate() + "." + footerDate.getFullYear();
