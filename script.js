let startContainer = document.querySelector('#w11-start-section');
let startBtn = document.querySelector('#windows-div');

let paddingContainer = document.querySelector('.padding-start');

let footerStartContainer = document.querySelector('#footer-start-section');

let windowsTab = document.querySelector('.windows-tab');

let topPartTab = document.querySelector('.topnavbar-tab');

let closeBtn = document.querySelector("#close-icon");
let MaxBtn = document.querySelector("#max-icon");
let minBtn = document.querySelector("#min-icon");

let heightTab = document.querySelector('.coming-soon-tab');

let appIcon = document.querySelectorAll('.app-icon');
let nomeTab = document.querySelector('.nome-tab');
let tabImage = document.querySelector('#tab-image');

let nav = document.querySelector('nav');
let iconNav = document.querySelector("#first-container");

let notifBtns = document.querySelector('#second-container');
let notifContainer = document.querySelector("#notification-section");

var vh = window.innerHeight / 100;
var vw = window.innerWidth / 100;

let isTopBarClicked = false;

let div = document.querySelector("#div");

let firstPositionX;
let firstPositionY;

let lastPositionX;
let lastPositionY;

startBtn.addEventListener("click", function() {
    paddingContainer.style.display = "grid";
    footerStartContainer.style.display = "flex";
    openOneWinCloseOther();
});

topPartTab.addEventListener("mousedown", function() {

    isTopBarClicked = true;
    document.onmousemove = function(e) {
        var x = e.clientX;
        var y = e.clientY;
        var MaxWidth = document.documentElement.scrollWidth;
        var MaxX = MaxWidth - windowsTab.offsetWidth;

        if (x <= 0) {
            leftTab();
        } else if (y <= 0) {
            topTab();
        } else if (x >= MaxX) {
            rightTab();
        } else {
            windowsTab.style.transitionDuration = "0s";
            windowsTab.style.left = x + "px";
            windowsTab.style.top = y + "px";
            if (windowsTab.offsetHeight > 90 * vh) {
                windowsTab.style.height = "70vh";
            }
            windowsTab.style.removeProperty("transform");
        }
    }

});

document.addEventListener("mouseup", function() {
    document.onmousemove = null;
});


for (let i = 0; i < appIcon.length; i++) {
    appIcon[i].addEventListener("click", function() {
        windowsTab.style.display = "grid";
        let appName = appIcon[i].querySelector("span").textContent;
        nomeTab.textContent = appName;
        let appImage = appIcon[i].querySelector("img").src;
    });
}

closeBtn.addEventListener("click", function() {
    windowsTab.style.display = "none";
});


minBtn.addEventListener("click", function() {
    windowsTab.style.display = "none";

    let newDivNav = document.createElement("div");
    let newImageIconNav = document.createElement("img");
    newImageIconNav.src = tabImage.src;
    newDivNav.appendChild(newImageIconNav);
    iconNav.appendChild(newDivNav);
});

MaxBtn.addEventListener("click", function() {
    topTab();
});

notifBtns.addEventListener("click", function() {
    notifContainer.classList.toggle("notification-on");
});


function leftTab() {
    windowsTab.style.left = 0 + "px";
    windowsTab.style.top = 0 + "px";
    windowsTab.style.removeProperty("right");
    windowsTab.style.removeProperty("transform");
    windowsTab.style.width = "50vw";
    windowsTab.style.height = "calc(100vh - var(--nav-height))";
    windowsTab.style.transitionDuration = "0.5s";
}

function topTab() {
    windowsTab.style.left = 0 + "px";
    windowsTab.style.top = 0 + "px";
    windowsTab.style.removeProperty("right");
    windowsTab.style.removeProperty("transform");
    windowsTab.style.width = "100vw";
    windowsTab.style.height = "calc(100vh - var(--nav-height))";
    windowsTab.style.transitionDuration = "0.5s";
}

function rightTab() {
    windowsTab.style.transform = "translateX(99%)";
    windowsTab.style.left = 0 + "px";
    windowsTab.style.top = 0 + "px";
    windowsTab.style.removeProperty("right");
    windowsTab.style.width = "50vw";
    windowsTab.style.height = "calc(100vh - var(--nav-height))";
    windowsTab.style.transitionDuration = "0.5s";
}

function openOneWinCloseOther() {
    startContainer.classList.toggle("on-visible-start");
}

function dragSelectorLogic() {

    document.addEventListener("mousedown", function(e1) {

        if (windowsTab.style.display == "grid") {
        } else {            
            if (e1.target.closest("#w11-start-section") != startContainer && startContainer.classList.contains("on-visible-start") && e1.target.closest("nav") != nav) {
                startContainer.classList.remove("on-visible-start");
                dragSelectorCode();
            }
            else if (e1.target.closest("#notification-section") != notifContainer && notifContainer.classList.contains("notification-on") && e1.target.closest("nav") != nav) {
                notifContainer.classList.remove("notification-on");
                dragSelectorCode();
            }
            else if (e1.target.closest("#w11-start-section") == startContainer || e1.target.closest("#notification-section") == notifContainer) {
            }
            else {
                dragSelectorCode();
            }
        }

        function dragSelectorCode() {
            div.style.display = "block";

            div.style.width = 0 + "px";
            div.style.height = 0 + "px";

            firstPositionX = e1.clientX;
            firstPositionY = e1.clientY;

            div.style.top = firstPositionY + "px";
            div.style.left = firstPositionX + "px";

            div.style.transition = "none";

            document.addEventListener("mousemove", function(e2) {
                lastPositionX = e2.clientX;
                lastPositionY = e2.clientY;

                if ((firstPositionX - lastPositionX) < 0) {
                    div.style.width = Math.round(lastPositionX - firstPositionX) + "px";
                }
                else {
                    div.style.width = Math.round(firstPositionX - lastPositionX) + "px";
                    div.style.left = lastPositionX + "px";
                }

                if ((firstPositionY - lastPositionY) < 0) {
                    div.style.height = Math.round(lastPositionY - firstPositionY) + "px";
                }
                else {
                    div.style.height = Math.round(firstPositionY - lastPositionY) + "px";
                    div.style.top = lastPositionY + "px";
                }
            });

            document.addEventListener("mouseup", function() {
                div.style.width = "0px";
                div.style.height = "0px";
                div.style.transition = "all 0.3s";

                setTimeout(function() {
                    div.style.display = "none";
                }, 300);
            });
        }
    });
}

function getDate() {
    let DataAttuale = new Date();

    let giorno = DataAttuale.getDate();
    let mese = DataAttuale.getMonth() + 1;
    let anno = DataAttuale.getFullYear();

    let ora = DataAttuale.getHours();
    let minuti = DataAttuale.getMinutes();

    let orarioContainer = document.getElementById("orario-data");
    let calendarioContainer = document.getElementById("calendario-data");

    if (ora < 10 && minuti < 10) {
        orarioContainer.innerHTML = "0" + ora + ":" + "0" + minuti;
    } else
    if (ora < 10) {
        orarioContainer.innerHTML = "0" + ora + ":" + minuti;
    } else
    if (minuti < 10) {
        orarioContainer.innerHTML = ora + ":" + "0" + minuti;
    } else {
        orarioContainer.innerHTML = ora + ":" + minuti;
    }
    
    if (giorno < 10 && mese < 10) {
        calendarioContainer.innerHTML = "0" + giorno + "/" + "0" + mese + "/" + anno;
    } else
    if (giorno < 10) {
        calendarioContainer.innerHTML = "0" + giorno + "/" + mese + "/" + anno;
    } else
    if (mese < 10) {
        calendarioContainer.innerHTML = giorno + "/" + "0" + mese + "/" + anno;
    } else {
        calendarioContainer.innerHTML = giorno + "/" + mese + "/" + anno;
    }

    document.getElementById('sistema-data').title = orarioContainer.innerHTML + "  " + calendarioContainer.innerHTML;

    setTimeout(function() {
        getDate();
    }, 60000);
}

dragSelectorLogic();
getDate();