async function getfilter() {
    // Penser à remplacer par les données récupérées dans le json
    const { filter } = await (
        fetch('./data/recipes.json')
          .then((recipes) => recipes.json())
      );
      return { filter };

    // et bien retourner le tableau filter seulement une fois
    
}

async function displayData(filter) {
    const filterSection = document.querySelector(".filter_section");

    filter.forEach((filter) => {
        const filterModel = filterFactory(filter);
        const userCardDOM = filterModel.getUserCardDOM();
        filterSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { filter } = await getfilter();
    displayData(filter);
};

init();