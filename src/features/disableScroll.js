

function preventDefault(e){
  e.preventDefault()
}
export function disableScroll() {
  window.addEventListener('wheel', preventDefault, {passive: false});
  window.addEventListener('touchmove', preventDefault, {passive: false});
}

// call this to Enable
export function enableScroll() {
  window.removeEventListener('wheel', preventDefault, {passive: false});
  window.removeEventListener('touchmove', preventDefault, {passive: false});
}





