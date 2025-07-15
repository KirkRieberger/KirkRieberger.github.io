#! ./.venv/bin/python

def main():
    try:
        with open("paths.txt") as f:
            files = f.read().splitlines()
        settings = files.pop(0).split(",")
        obvFace = settings[0]
        dirPath = settings[1]

        parts = dirPath.split("/")

        outFile = open("elements-out.txt", "w")
        # path should be like:
        # ./resources/coins/pennies/canada/commemorative/thumbs/penny-1967-rev-centennial-thumb.png
        # with implied side matching (note rev -> obv):
        # ./resources/coins/pennies/canada/commemorative/thumbs/penny-1967-obv-centennial-thumb.png
        for file in files:
            path = dirPath + file
            # Assumes side is always reverse
            pathObv = path.replace("rev", "obv")
            # Gives: [".", "resources", "coins", "denomination", "country","type", "size", "filename"]
            country = parts[4]
            coinType = parts[5]
            filenameParts = file.split("-")
            # Gives: ["denomination", "year", "side", "special_info_or_name"[, "thumb"].png]
            denom = filenameParts[0]
            year = filenameParts[1]
            side = filenameParts[2]
            if filenameParts[3]:
                alt = filenameParts[3].replace("_", " ").replace("+", "-").title()
                info = filenameParts[3]
                if filenameParts[4]:
                    viewName = filenameParts[0] + "-" + filenameParts[1] + "-" + filenameParts[2] + "-" + filenameParts[3].replace("'", "&apos;") + ".png"
                    viewNameObv = filenameParts[0] + "-" + filenameParts[1] + "-obv-" + filenameParts[3].replace("'", "&apos;") + ".png"
            else:
                info = ""
                alt = ""
                viewName = filenameParts[0] + "-" + filenameParts[1] + "-" + filenameParts[2] + ".png"
                viewNameObv = filenameParts[0] + "-" + filenameParts[1] + "-obv" + ".png"
            filenameObv = file.replace("rev", "obv")

            elementOut = f"""
            <section id="year-{year}-{info}" class="row striped">
                <p class="coin-heading">
                    {year} - {obvFace} - Series
                </p>
                <div class="col-6">
                    <img src="{path}"
                        alt="{year} {denom} - {alt}" class="w-75" loading="lazy" onclick='viewImage("{viewName}", "{country}", "{coinType}")'>
                </div>
                <div class=" col-6">
                    <img src="{pathObv}"
                        alt="{year} {denom} - {alt}" class="w-75" loading="lazy" onclick='viewImage("{viewNameObv}", "{country}", "{coinType}")'>
                </div>
                <div class=" col-12">
                    Notes:
                </div>
            </section>"""

            outFile.write(elementOut)
    finally:
        outFile.close()

if __name__ == "__main__":
    main()