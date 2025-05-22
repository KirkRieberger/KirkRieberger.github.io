const viewerModal = new bootstrap.Modal('#viewerModal');

function viewImage(image, country, type) {
    /* 
    Displays an image viewer modal with full size version of requested image.

    Params:
        image - The file name of the requested image
                Format:  coin-year-side.type
                Example: dime-2006-obv.jpeg
                Format:  coin-year-side-description_hyphenated+words.png
                Example: quarter-2013-rev-1812_charles+michael_de_salaberry_coloured.png

    Returns: Undefined
    */
    let side;
    let title;
    let splitImage = image.split("-");
    let denom = splitImage[0];
    if (denom == "penny") {
        denom = "pennie"
    }
    if (splitImage[2].split(".")[0] == "obv") {
        side = "Obverse";
    } else {
        side = "Reverse";
    }
    if (splitImage[3]) {
        let desc = splitImage[3].split(".")[0].replace(/[_]/g, " ").replace("+", "-").toProperCase();
        title = `${splitImage[1]} ${splitImage[0].capitalizeFirst()} ${side} - ${desc}`;
    } else {
        title = `${splitImage[1]} ${splitImage[0].capitalizeFirst()} ${side}`;
    }

    $("#image-viewer-title").text(title);
    $("#modal-img").attr("src", "");
    $("#modal-img").attr("src", `../../resources/coins/${denom}s/${country}/${type}/full/${image}`);
    viewerModal.show();
}

String.prototype.capitalizeFirst = function () {
    return this[0].toUpperCase() + this.slice(1);
}

String.prototype.toProperCase = function () {
    let output = "";
    let temp = this.split(" ");
    let i = 0;
    for (substring of temp) {
        if (substring == "rcmp") {
            output += " " + "RCMP";
        } else if (i == 0) {
            output += substring[0].toUpperCase() + substring.slice(1);
        } else if (substring == "of") {
            output += " " + "of";
        } else if (substring == "the") {
            output += " " + "the";
        } else {
            output += " " + substring[0].toUpperCase() + substring.slice(1);
        }
        i = i + 1;
    }
    return output;
}