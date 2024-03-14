//script
// navigation bar opening and closing in smaller screen
var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right = "0";
}
var sidemenu = document.getElementById("sidemenu");
function closemenu(){
    sidemeu.style.right = "-200px";
}

// ---------------Tab Content Functionality-------------------------
 document.addEventListener("DOMContentLoaded", function() {
    var tablinks = document.querySelectorAll(".tab-links");
    var tabcontents = document.querySelectorAll(".tab-contents");

    function openTab(tabname, event) {
        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    // Attaching click event listeners to tab links
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function(event) {
            openTab(this.getAttribute("onclick").match(/'(.*?)'/)[1], event);
        });
    }
});



