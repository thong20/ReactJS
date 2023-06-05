
/**
 * Disable tính năng scroll của trình duyệt
 */
export function disableScroll() {
  window.addEventListener('wheel', preventDefault, {passive: false});
  window.addEventListener('touchmove', preventDefault, {passive: false});
}

/**
 * Enable tính năng scroll của trình duyệt
 */
export function enableScroll() {
  window.removeEventListener('wheel', preventDefault, {passive: false});
  window.removeEventListener('touchmove', preventDefault, {passive: false});
}

function preventDefault(e){
  e.preventDefault()
}



