let ourOrgContainer = document.querySelector(".ourOrgContainer");
let logoMissionStmnt = document.querySelector(".logoMissionStmnt");
let aboutHeader = document.querySelector(".aboutHeader");
let aboutHeaderTray = document.querySelector(".aboutHeaderTray");
let scrollDownButton = document.getElementById("buttonTarget");
let mainContent = document.querySelector(".mainContent");
let row2 = document.querySelector(".row2");
let intersecting = true;

aboutHeader.addEventListener("mouseover", () =>{
    aboutHeader.style.background = "white";
    aboutHeaderTray.style.visibility = "visible";
    aboutHeaderTray.style.opacity = "1";
    aboutHeaderTray.style.transform= "translateY(100%)";

});
aboutHeader.addEventListener("mouseleave", () =>{
    aboutHeader.style.background = "transparent";
    aboutHeaderTray.style.opacity = "0";
    aboutHeaderTray.style.transform= "translateY(0%)";
    aboutHeaderTray.style.visibility = "hidden";
});
scrollDownButton.addEventListener("click", () => {
    if(intersecting){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    else{
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        })
    }
});
function updateArrow(bool) {
    if(!bool){
        scrollDownButton.innerHTML = "<i class=\"fa-solid fa-angle-down\"></i>"
    }
    else{
        scrollDownButton.innerHTML = "<i class=\"fa-solid fa-angle-up\"></i>"
    }
}
let options = {
    threshold: [0, 1.0]
}
let callback = (entries, observer) => {
    entries.forEach((entry) =>{
        intersecting = entry.isIntersecting
        updateArrow(intersecting);
    });
}
let observer = new IntersectionObserver(callback, options);
observer.observe(row2);