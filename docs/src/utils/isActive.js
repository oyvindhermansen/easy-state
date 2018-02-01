export const isActive = (location, path) => {
  if (location.pathname.includes(path)) {
    return true;
  }

  return false;
};

export const isExactActive = (location, path) => {
  if (location.pathname === path) {
    return true;
  }

  return false;
};
