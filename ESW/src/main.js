$(document).ready(function () {
    let portrait = matchMedia("orientation: portrait").matches;
    if (portrait) {
        $(".modal-dialog").addClass("modal-dialog-centered");
        console.log("Set to portrait mode");
    } else {
        $(".modal-dialog").removeClass("modal-dialog-centered");
        console.log("Set to landscape mode");
    }
});

imageMapResize();

screen.orientation.addEventListener("change", (event) => {
    const type = event.target.type;
    const angle = event.target.angle;
    if (type == "portrait-primary") {
        $(".modal-dialog").addClass("modal-dialog-centered");
        console.log("Set to portrait mode");
    } else {
        $(".modal-dialog").removeClass("modal-dialog-centered");
        console.log("Set to landscape mode");
    }
    console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`);
});


// Modal click methods
function idClick() {
    const idModal = $("#idModal");
    idModal.modal('show');
}

function devClick() {
    const devModal = $("#devModal");
    devModal.modal('show');
}

function prtClick() {
    const prtModal = $("#prtModal");
    prtModal.modal('show');
}

function cldClick() {
    const cldModal = $("#cldModal");
    cldModal.modal('show');
}

function netClick() {
    const netModal = $("#netModal");
    netModal.modal('show');
}

function datClick() {
    const datModal = $("#datModal");
    datModal.modal('show');
}

function fileClick() {
    const fileModal = $("#fileModal");
    fileModal.modal('show');
}

function mailClick() {
    const mailModal = $("#mailModal");
    mailModal.modal('show');
}

window.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("o9n");
    const displayOrientation = () => {
        const screenOrientation = screen.orientation.type;
        output.innerHTML = `The orientation of the screen is: ${screenOrientation}`;
        if (screenOrientation === "landscape-primary") {
            console.log("That looks good.");
        } else if (screenOrientation === "landscape-secondary") {
            console.log("Mmmh... the screen is upside down!");
        } else if (screenOrientation === "portrait-secondary" || screenOrientation === "portrait-primary") {
            console.log("Mmmh... you should rotate your device to landscape");
        } else if (screenOrientation === undefined) {
            console.log("The orientation API isn't supported in this browser :(");
        }
    };

    if (screen && screen.orientation !== null) {
        try {
            window.screen.orientation.onchange = displayOrientation;
            displayOrientation();
        }
        catch (e) { output.innerHTML = e.message; }
    }
});