    function changeFavicon(iconURL) {
        let link = document.querySelector("link[rel*='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = iconURL;
    }
    document.title = "D E O";
    changeFavicon("https://i.imgur.com/LOFnBmH.png");


document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.createElement("iframe");
    iframe.src = "//jsfiddle.net/Deo2Some/6mvbd51a/embedded/result/";
    iframe.frameBorder = "0";
    iframe.loading = "lazy";
    iframe.allowTransparency = "true";
    iframe.allowFullscreen = "true";
    iframe.style = "width: 100vw; height: calc(100vh + 50px); position: fixed; top: -50px; left: 0px; background: #1e1e2f; z-index: 100; max-width: 100vw !important;";
    
    document.body.appendChild(iframe);
});
