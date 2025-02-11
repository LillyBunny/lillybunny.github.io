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

document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.createElement("iframe");
    iframe.src = "//jsfiddle.net/Deo2Some/kmd20n1t/embedded/result/";
    iframe.frameBorder = "0";
    iframe.loading = "lazy";
    iframe.allowTransparency = "true";
    iframe.allowFullscreen = "true";
    iframe.style = "width: 100vw; height: calc(100vh + 50px); position: fixed; top: -50px; left: 0px; background: #1e1e2f; z-index: 100; max-width: 100vw !important;";
    
    document.body.appendChild(iframe);
});
