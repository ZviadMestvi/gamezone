export const sortAlphabeticallyAsc = array => {
  return [...array].sort((a, b) => a.name.localeCompare(b.name));
};

export const sortAlphabeticallyDesc = array => {
  return [...array].sort((a, b) => b.name.localeCompare(a.name));
};

export const sortByReleaseDateAsc = array => {
  return [...array].sort(
    (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
  );
};

export const sortByReleaseDateDesc = array => {
  return [...array].sort(
    (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
  );
};

export const sortByPriceAsc = array => {
  return [...array].sort((a, b) => a.price - b.price);
};

export const sortByPriceDesc = array => {
  return [...array].sort((a, b) => b.price - a.price);
};
