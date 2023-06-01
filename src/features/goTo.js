/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

export function goTo(location){
  // window.scrollTo({top: 0, behavior: 'smooth'})
  $('html, body').animate({scrollTop: 0}, 600);
  return ({...location, pathname: '/contact'})
}