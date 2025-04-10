
const FAVORITES_KEY = 'favoriteRecipes';

export const getFavorites = () => {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveFavorite = (recipe) => {
  const current = getFavorites();
  const exists = current.find((r) => r.id === recipe.id);
  if (!exists) {
    current.push(recipe);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(current));
  }
};

export const removeFavorite = (id) => {
  const current = getFavorites();
  const updated = current.filter((r) => r.id !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
};

export const isFavorite = (id) => {
  const current = getFavorites();
  return current.some((r) => r.id === id);
};
