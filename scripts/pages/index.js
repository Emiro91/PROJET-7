async function getrecipes() {
    // Penser à remplacer par les données récupérées dans le json
    const { recipes } = await (
        fetch('./data/recipes.json')
          .then((response) => response.json())
      );
      return { recipes };

    // et bien retourner le tableau photographers seulement une fois
    
};

/*async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};*/

//init();