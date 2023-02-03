export function RG(value: string) {
  const rgRegex = /(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)/;
  return rgRegex.test(value);
}
