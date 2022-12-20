function getmediasPage() {


    const jpg = `assets/images/media/${image}`;
    const mp4 = `assets/images/media/${video}`;
    const li = document.createElement("li");

    const ahref = document.createElement("a");
    ahref.setAttribute("class", "cards-media-img");
    ahref.setAttribute("role", "button");
    ahref.setAttribute("title", title);
    ahref.setAttribute("aria-describedby", "ouvrir le slider");
    ahref.setAttribute("href", "#");

    const divlike = document.createElement("div");
    divlike.setAttribute("class", "header-like");

    const namep = document.createElement("p")
    namep.setAttribute("class", "item-name");
    namep.textContent = title;

    const divinfo = document.createElement("div");
    divinfo.setAttribute("class", "item-info");

    const infop = document.createElement("p");
    infop.setAttribute("class", "info-prices");
    infop.setAttribute("id", "likeCounter");
    infop.textContent = `${price} €`;

    const divlike1 = document.createElement("div");
    divlike1.setAttribute("id", "like");
    divlike1.setAttribute("class", "like");
  
    const buttonp = document.createElement("button")
    buttonp.setAttribute("class", "btnlike");
    buttonp.setAttribute("id", "likeButton");
    buttonp.textContent = likes;

    const buttoni = document.createElement("i");
    buttoni.setAttribute("class", "fa fa-heart likeheart");
    buttoni.setAttribute("id", "icon-heart");
    buttoni.setAttribute("aria-hidden", "true");

    // If JPG -> <img>
    if (jpg.split('.').pop() === 'jpg') {
        const img = document.createElement('img');
        img.setAttribute('class', 'lightboxMedia');
        img.setAttribute('src', jpg);
        img.setAttribute('alt', title);
        img.setAttribute('tabindex', '0');

        li.appendChild(ahref);
        li.appendChild(img);
        li.appendChild(divlike);
        divlike.appendChild(namep);
        divinfo.appendChild(infop);

        divinfo.appendChild(divlike1);
        divlike1.appendChild(buttonp);
        divlike1.appendChild(buttoni);
        divlike.appendChild(divinfo);
    }
    // If MP4 -> <video>
    if (mp4.split('.').pop() === 'mp4') {
        const videoPlayer = document.createElement('video');
        videoPlayer.setAttribute('controls', '');
        videoPlayer.setAttribute('class', 'lightboxMedia');
        const source = document.createElement('source');
        source.setAttribute('src', mp4);
        source.setAttribute('type', 'video/mp4');
        source.setAttribute('class', 'lightboxImg');
        source.setAttribute('tabindex', '0');



        li.appendChild(ahref);
        li.appendChild(videoPlayer);
        videoPlayer.appendChild(source);
        li.appendChild(divlike);
        divlike.appendChild(namep);
        divinfo.appendChild(infop);
        divinfo.appendChild(divlike1);
        divlike1.appendChild(buttonp);
        divlike1.appendChild(buttoni);
        divlike.appendChild(divinfo);

    }

    return li;
};