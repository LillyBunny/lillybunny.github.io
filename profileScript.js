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
