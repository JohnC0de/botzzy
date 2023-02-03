export function URL(value: string) {
  const urlRegex =
    /^(((https?|ftp):\/\/)?([\w\-\.])+(\.)([\w]){2,4}([\w\/+=%&_\.~?\-]*))*$/;
  return urlRegex.test(value);
}
