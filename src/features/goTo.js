/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {useHistory} from 'react-router-dom'
import {enableScroll} from "./disableScroll";


function goTo(str_location, index, setStep, menus, setMenus){
  const history = useHistory();
  if(isOpenMenu) toggleMenu();
  enableScroll();
  const menu = document.querySelectorAll('.nav-items')[0]
  menu.style.top = '100vh'; // 👈👈 for menu responsive

  $(function(){
    $('html').animate({scrollTop: 0}, 500, function(){
      setStep(str_location);
      history.push(str_location);
      const newMenus = menus.map(menu => ({...menu, isActive: false}));
      newMenus[index].isActive = true;
      setMenus(newMenus);
    });
  })
}