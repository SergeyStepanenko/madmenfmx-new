export function getIsNewTabClick(event: any) {
  if (
    event.ctrlKey ||
    event.shiftKey ||
    event.metaKey || // apple
    (event.button && event.button == 1) // middle click, >IE9 + everyone else
  ) {
    return true
  }

  return false
}
