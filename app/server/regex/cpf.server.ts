export function CPF(value: string) {
  const cpfRegex = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)/;
  return cpfRegex.test(value);
}
