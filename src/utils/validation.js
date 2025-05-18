export default function isValidUrl(url) {
  const urlRegex = /^https?:\/\/\S+$/i;
  return urlRegex.test(url);
}
