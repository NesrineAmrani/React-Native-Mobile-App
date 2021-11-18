import { CategoriesList, categories } from './dataArrays';

export function getCategoryById(categoryId) {
  let category;
  categories.map(data => {
    if (data.id == categoryId) {
      category = data;
    }
  });
  return category;
}



export function getCategoryName(categoryId) {
  let name;
  categories.map(data => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getList(categoryId) {
  const CategoriesArray = [];
  CategoriesList.map(data => {
    if (data.categoryId == categoryId) {
      CategoriesArray.push(data);
    }
  });
  return CategoriesArray;
}






