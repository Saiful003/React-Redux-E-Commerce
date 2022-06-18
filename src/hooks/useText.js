export function useText(text) {
  return text.substring(0, 40).trim().concat("... ");
}
