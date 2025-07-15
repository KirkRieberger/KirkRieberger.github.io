import os

rootDir = "/home/kirk/Documents/git-source/KirkRieberger.github.io/resources/coins/"
dirs = os.listdir(rootDir)

for dir in dirs:
    countries = os.listdir(rootDir + dir)
    for country in countries:
        coinTypes = os.listdir(f"{rootDir}{dir}/{country}")
        if "commemorative" in coinTypes:
            # Commemorative versions exist

            fullPath = f"{rootDir}{dir}/{country}/commemorative/full"
            fulls: list = os.listdir(fullPath)
            fulls.sort()
            if ".dir.txt" in fulls:
                fulls.remove(".dir.txt")

            thumbPath = f"{rootDir}{dir}/{country}/commemorative/thumbs"
            thumbs: list = os.listdir(thumbPath)
            thumbs.sort()
            if ".dir.txt" in thumbs:
                thumbs.remove(".dir.txt")

            with open(fullPath + "/.dir.txt", "wt", encoding="utf-8") as fullOut:
                fullOut.write("\n".join(fulls))
                fullOut.write("\n")

            with open(thumbPath + "/.dir.txt", "wt", encoding="utf-8") as thumbOut:
                thumbOut.write("\n".join(thumbs))
                thumbOut.write("\n")
        if "standard" in coinTypes:
            # Standard versions exist

            fullPath = f"{rootDir}{dir}/{country}/standard/full"
            fulls: list = os.listdir(fullPath)
            fulls.sort()
            if ".dir.txt" in fulls:
                fulls.remove(".dir.txt")

            thumbPath = f"{rootDir}{dir}/{country}/standard/thumbs"
            thumbs: list = os.listdir(thumbPath)
            thumbs.sort()
            if ".dir.txt" in thumbs:
                thumbs.remove(".dir.txt")

            with open(fullPath + "/.dir.txt", "wt", encoding="utf-8") as fullOut:
                fullOut.write("\n".join(fulls))
                fullOut.write("\n")

            with open(thumbPath + "/.dir.txt", "wt", encoding="utf-8") as thumbOut:
                thumbOut.write("\n".join(thumbs))
                thumbOut.write("\n")
