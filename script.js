import Contact from "./Contact.js";


const formInfo = document.getElementById("formInfo");
let hasJob = false;
if (hasJob) {
    showMessage('Thanks for visiting, I am currently employed!');
} else {
    showMessage('Please look around, I am looking for opportunities in software development.');
}

let today = new Date("05/13/2025");
let dayOfWeek = today.getDay();

if (dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage('It is the weekend Please allowed me sometime to get back to you!');
}

function showMessage(message) {

    formInfo.innerHTML += "<p>" + message + "</p>";
    //document.getElementById("formInfo").innerHTML = message;
}
function clearMessage() {
    formInfo.innerHTML = "";
}

const contactForm = document.getElementById("contactForm");

// contactForm.addEventListener("submit", function(event) {

//     event.preventDefault();
//     showMessage("Please wait while I send your message...");
// });

contactForm.addEventListener("submit", sendMessage);

function sendMessage(event) {
    event.preventDefault();
    const contact = new Contact(contactForm);
//showMessage("Please wait while I send your message..." + contactForm.fullName);
contact.send();
}

const experiences = document.getElementsByClassName("rdiv");
for(let x = 0; x < experiences.length; x++){
    const item = experiences[x];
    item.addEventListener("mouseenter", function(event){
        event.target.style.backgroundColor = "lightblue";
    })
    item.addEventListener("mouseleave", function(event){
        event.target.style.backgroundColor = "";
    })
}


