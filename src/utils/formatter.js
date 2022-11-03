const priceFormatter = (price) => {
  const formatter = new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: 0,
  });
  return formatter.format(price);
};

export { priceFormatter };
