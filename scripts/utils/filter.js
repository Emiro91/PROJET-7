
async function getfilter() {
const filterData = await (
    fetch('./data/recipes.json')
    .then((response) => recipes.json())
  );
  filterData.filters = filterData.filters.filter(
    (filter) => filter.id == id
  )[0];
  return filterData;


}