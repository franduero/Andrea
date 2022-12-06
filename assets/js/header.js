document.addEventListener("DOMContentLoaded", () => {
  const openMenu = document.getElementById("open");
  const closeMenu = document.getElementById("close");
  const mobileMenu = document.getElementById("mobile-menu")

  openMenu.addEventListener("click", () => {
    mobileMenu.style.height="180px"
    mobileMenu.style.borderTop="1px solid black"
    mobileMenu.style.borderBottom="1px solid black"
    openMenu.style.display="none"
    closeMenu.style.display="flex"
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.style.height="0"
    mobileMenu.style.borderTop="1px solid transparent"
    mobileMenu.style.borderBottom="1px solid transparent"
    openMenu.style.display="flex"
    closeMenu.style.display="none"
  });

  window.addEventListener("resize", () => {
    if(window.innerWidth >= 980){
        openMenu.style.display="none"
        closeMenu.style.display="none"
        mobileMenu.style.height="0"
    } else {
        if(openMenu.style.height == "auto"){
            closeMenu.style.display="flex"
            openMenu.style.display="none"
        } else{
            mobileMenu.style.height="0"
            closeMenu.style.display="none"
            openMenu.style.display="flex"
        }
    }
  })
});
