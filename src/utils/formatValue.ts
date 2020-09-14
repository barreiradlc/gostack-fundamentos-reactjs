const formatValue = (value: number): string =>
  Intl.NumberFormat("pt-BR").format(value); // TODO

export default formatValue;
