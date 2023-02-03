let ourOrgContainer = document.querySelector(".ourOrgContainer");
let aboutHeader = document.querySelector(".aboutHeader");
let aboutHeaderTray = document.querySelector(".aboutHeaderTray");
let pfpImage = document.querySelector(".image");
let pfpName = document.querySelector(".pfpName");
let pfpDesc = document.querySelector(".pfpClassName");
let rightArrow = document.querySelector(".rightArrow");
let leftArrow = document.querySelector(".leftArrow");


let nameArray = ["Beyonce", "Selena Gomez", "Shah Rukh Khan", "Tom Cruise"];
let picArray = ["Beyonce.jpg", "SG.jpeg", "SRK.jpeg", "TC.jpg"];
let descArray = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellendus magni fugiat nihil nemo recusandae incidunt mollitia reiciendis quidem qui possimus. Enim, nemo id minima facere ab alias tempora a voluptate reiciendis inventore, corporis nisi incidunt voluptas rerum soluta ex aut cupiditate accusamus iure. Dolorem quia incidunt, tenetur optio inventore tempora temporibus dignissimos iure quod, illo maxime id vitae architecto veritatis iste reprehenderit nisi animi necessitatibus modi! Nostrum tempore rerum praesentium facere, sequi nemo in earum ut eveniet laudantium nisi perspiciatis repudiandae doloremque neque error accusantium fugit. Quaerat quisquam rerum aliquam dolore, recusandae, nesciunt eveniet eos libero repellat earum deleniti aperiam velit porro dicta tempora ut, vel qui repudiandae eum molestias. Consequuntur iusto minus molestias aliquam autem ut cupiditate, odio quasi perspiciatis quod beatae, velit asperiores id? Minus ab illo commodi error sit saepe exercitationem tempore iusto dolore ut vero, nisi accusamus, porro voluptatum blanditiis perferendis animi ipsum. Natus, quis",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellendus magni fugiat nihil nemo recusandae incidunt mollitia reiciendis quidem qui possimus. Enim, nemo id minima facere ab alias tempora a voluptate reiciendis inventore, corporis nisi incidunt voluptas rerum soluta ex aut cupiditate accusamus iure. Dolorem quia incidunt, tenetur optio inventore tempora temporibus dignissimos iure quod, illo maxime id vitae architecto veritatis iste reprehenderit nisi animi necessitatibus modi! Nostrum tempore rerum praesentium facere, sequi nemo in earum ut eveniet laudantium nisi perspiciatis repudiandae doloremque neque error accusantium fugit. Quaerat quisquam rerum aliquam dolore, recusandae, nesciunt eveniet eos libero repellat earum deleniti aperiam velit porro dicta tempora ut, vel qui repudiandae eum molestias. Consequuntur iusto minus molestias aliquam autem ut cupiditate, odio quasi perspiciatis quod beatae, velit asperiores id? Minus ab illo commodi error sit saepe exercitationem tempore iusto dolore ut vero, nisi accusamus, porro voluptatum blanditiis perferendis animi ipsum. Natus, quis",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellendus magni fugiat nihil nemo recusandae incidunt mollitia reiciendis quidem qui possimus. Enim, nemo id minima facere ab alias tempora a voluptate reiciendis inventore, corporis nisi incidunt voluptas rerum soluta ex aut cupiditate accusamus iure. Dolorem quia incidunt, tenetur optio inventore tempora temporibus dignissimos iure quod, illo maxime id vitae architecto veritatis iste reprehenderit nisi animi necessitatibus modi! Nostrum tempore rerum praesentium facere, sequi nemo in earum ut eveniet laudantium nisi perspiciatis repudiandae doloremque neque error accusantium fugit. Quaerat quisquam rerum aliquam dolore, recusandae, nesciunt eveniet eos libero repellat earum deleniti aperiam velit porro dicta tempora ut, vel qui repudiandae eum molestias. Consequuntur iusto minus molestias aliquam autem ut cupiditate, odio quasi perspiciatis quod beatae, velit asperiores id? Minus ab illo commodi error sit saepe exercitationem tempore iusto dolore ut vero, nisi accusamus, porro voluptatum blanditiis perferendis animi ipsum. Natus, quis",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellendus magni fugiat nihil nemo recusandae incidunt mollitia reiciendis quidem qui possimus. Enim, nemo id minima facere ab alias tempora a voluptate reiciendis inventore, corporis nisi incidunt voluptas rerum soluta ex aut cupiditate accusamus iure. Dolorem quia incidunt, tenetur optio inventore tempora temporibus dignissimos iure quod, illo maxime id vitae architecto veritatis iste reprehenderit nisi animi necessitatibus modi! Nostrum tempore rerum praesentium facere, sequi nemo in earum ut eveniet laudantium nisi perspiciatis repudiandae doloremque neque error accusantium fugit. Quaerat quisquam rerum aliquam dolore, recusandae, nesciunt eveniet eos libero repellat earum deleniti aperiam velit porro dicta tempora ut, vel qui repudiandae eum molestias. Consequuntur iusto minus molestias aliquam autem ut cupiditate, odio quasi perspiciatis quod beatae, velit asperiores id? Minus ab illo commodi error sit saepe exercitationem tempore iusto dolore ut vero, nisi accusamus, porro voluptatum blanditiis perferendis animi ipsum. Natus, quis",

];



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

rightArrow.addEventListener("mousedown", ()=>{
    rightArrow.style.transform = "scale(130%)";
});
rightArrow.addEventListener("mouseup", ()=>{
    rightArrow.style.transform = "none";
});

rightArrow.addEventListener("click", ()=>{
    updateCarousel("right");
});

leftArrow.addEventListener("mousedown", ()=>{
    leftArrow.style.transform = "scale(130%)";
});
leftArrow.addEventListener("mouseup", ()=>{
    leftArrow.style.transform = "none";
});

leftArrow.addEventListener("click", ()=>{
    updateCarousel("left");
});


let numOfMems = picArray.length;
let arrayCount = 0;
let resetTimer = false; //not allow the interval to go again 

function updateCarousel(string){
    if(string == "right"){
        arrayCount++;
        if(arrayCount == numOfMems){
            arrayCount = 0;
        }
        resetTimer = true;
        pfpImage.style.opacity = "0";
        pfpName.style.opacity = "0";
        pfpDesc.style.opacity = "0";
        setTimeout(() => {
            pfpImage.src = `./images/teamPictures/${picArray[arrayCount]}`;
            pfpName.innerHTML = nameArray[arrayCount];
            pfpDesc.innerHTML = descArray[arrayCount];
            pfpImage.style.opacity = "1";
            pfpName.style.opacity = "1";
            pfpDesc.style.opacity = "1";
        }, 500);
    }
    else{
        arrayCount--;
        if(arrayCount < 0){
            arrayCount = picArray.length - 1;
        }
        resetTimer = true;
        pfpImage.style.opacity = "0";
        pfpName.style.opacity = "0";
        pfpDesc.style.opacity = "0";
        setTimeout(() => {
            pfpImage.src = `./images/teamPictures/${picArray[arrayCount]}`;
            pfpName.innerHTML = nameArray[arrayCount];
            pfpDesc.innerHTML = descArray[arrayCount];
            pfpImage.style.opacity = "1";
            pfpName.style.opacity = "1";
            pfpDesc.style.opacity = "1";
        }, 500);
    }
}

setInterval(() => {
    if(resetTimer){
        resetTimer = false;
    }
    else{
        arrayCount++;
        if(arrayCount == numOfMems){
            arrayCount = 0;
        }
        pfpImage.style.opacity = "0";
        pfpName.style.opacity = "0";
        pfpDesc.style.opacity = "0";
        setTimeout(() => {
            pfpImage.src = `./images/teamPictures/${picArray[arrayCount]}`;
            pfpName.innerHTML = nameArray[arrayCount];
            pfpDesc.innerHTML = descArray[arrayCount];
            pfpImage.style.opacity = "1";
            pfpName.style.opacity = "1";
            pfpDesc.style.opacity = "1";
        }, 500);
    }

}, 10000);