export function PASSWORD(value: string) {
  // 6 characters
  // At least one uppercase letter
  // At least one lowercase letter,
  // At least one number
  // At least one special character

  const passwordRegex =
    /(?=^.{6,}$)((?=.*\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[|!"$%&\/\(\)\?\^\'\\\+\-\*]))^.*/;
  return passwordRegex.test(value);
}
