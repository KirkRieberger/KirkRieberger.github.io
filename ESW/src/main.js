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