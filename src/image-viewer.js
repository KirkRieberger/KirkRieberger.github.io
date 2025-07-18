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
        if (denom == "voyageur+dollar") {
            title = `${splitImage[1]} Voyageur Dollar ${side} - ${desc}`;
            denom = "loonie"
        } else {
            title = `${splitImage[1]} ${splitImage[0].capitalizeFirst()} ${side} - ${desc}`;
        }
    } else {
        if (denom == "voyageur+dollar") {
            title = `${splitImage[1]} Voyageur Dollar ${side}`;
            denom = "loonie"
        } else {
            title = `${splitImage[1]} ${splitImage[0].capitalizeFirst()} ${side}`;
        }
    }

    $("#image-viewer-title").text(title);
    $("#modal-img").attr("src", "");
    $("#modal-img").attr("src", `../../resources/coins/${denom}s/${country}/${type}/full/${image}`);
    $('#modal-img-link').attr("href", `../../resources/coins/${denom}s/${country}/${type}/full/${image}`);
    viewerModal.show();
}

String.prototype.capitalizeFirst = function () {
    return this[0].toUpperCase() + this.slice(1);
}

String.prototype.toProperCase = function () {
    let output = "";
    let temp = this.split(" ");
    let i = 0;
    let acronyms = ["rcmp", "lgbt", "un"];
    for (substring of temp) {
        switch (substring) {

            case "of":
                output += " " + "of";
                break;

            case "the":
                output += " " + "the";
                break;

            case "a":
                output += " " + "a";
                break;

            case "macgill":
                output += " " + "MacGill";
                break;

            case "de":
                output += " " + "de";
                break;

            case "ww2":
                output += " " + "WW2";
                break;

            case "ww1":
                output += " " + "WW1";
                break;

            default:
                if (acronyms.includes(substring)) {
                    output += " " + substring.toUpperCase();
                } else if (substring.split("-").length > 1) {
                    let recurseTemp = substring.split("-");
                    let j = 0;
                    for (recurseSubstring of recurseTemp) {
                        if (j == 0) {
                            output += " " + recurseSubstring.toProperCase();
                        } else {
                            output += "-" + recurseSubstring.toProperCase();
                        }
                        j++;
                    }
                } else if (i == 0) {
                    output += substring[0].toUpperCase() + substring.slice(1);
                } else {
                    output += " " + substring[0].toUpperCase() + substring.slice(1);
                }
                break;
        }
        i++;
    }
    return output;
}