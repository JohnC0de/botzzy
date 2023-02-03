export function PHONE(value: string) {
  const phoneRegex = /([0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)/;
  return phoneRegex.test(value);
}
