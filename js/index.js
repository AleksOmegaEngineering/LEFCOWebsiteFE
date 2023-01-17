let ourOrgContainer = document.querySelector(".ourOrgContainer");
let logoMissionStmnt = document.querySelector(".logoMissionStmnt");
let aboutHeader = document.querySelector(".aboutHeader");
let aboutHeaderTray = document.querySelector(".aboutHeaderTray");

window.onload = (event) =>{
    logoMissionStmnt.style.opacity = "1";
    logoMissionStmnt.style.transform = "translateY(0vh)";
}
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