// let menu_bar = document.querySelector(".menu-icon")
function isNav(e){
    var x = document.getElementById('right-nav-responsive')
    if (x.style.display === "none") {
        x.style.display = "flex";
      } else {
        x.style.display = "none";
      }
    
}
