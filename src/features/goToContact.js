export function goToContact(location){
  window.scrollTo({top: 0, behavior: 'smooth'})
  return ({...location, pathname: '/contact'})
}