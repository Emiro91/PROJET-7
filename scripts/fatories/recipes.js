function recipesFactory(data) {
    const {
        id,
        name,
        servings,
        ingredients,
        time,
        description,
        appliance,
        ustensils,
    } = data;

    //const picture = `assets/photographers/${portrait}`;

function getUserCardDOM() {
    const article = document.createElement('article');
    article.setAttribute("class","search__tags")
    const img = document.createElement('img');
    img.setAttribute("src", picture)
    img.setAttribute("class", "card-img")

    const h2 = document.createElement('h2');
    h2.textContent = name;


    const ahref = document.createElement("a");
    ahref.setAttribute("class", "link");
    ahref.setAttribute("aria-label", `${name}`);
    ahref.setAttribute("href", `photographer.html?id=${id}`);

    ahref.appendChild(article);
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(p);

    return ahref;
}
return {
    id,
        name,
        servings,
        ingredients,
        time,
        description,
        appliance,
        ustensils,
}

};