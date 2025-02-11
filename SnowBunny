document.addEventListener("DOMContentLoaded", function() {
  var img = document.querySelector("#profilephoto img");
  if (img) {
    img.id = "profileImage";
    img.addEventListener("click", function() {
      window.open("https://ust.chatango.com/profileimg/s/n/snowbunny/full.jpg", "_blank");
    });
  }
});

function changeFavicon(iconURL) {
  let link = document.querySelector("link[rel*='icon']");
  if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
  }
  link.href = iconURL;
}
document.title = "SnowBunny";
changeFavicon("https://i.imgur.com/Yn6hE3D.png");
