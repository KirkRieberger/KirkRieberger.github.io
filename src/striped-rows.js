rows = $(".striped")
numRows = $(".striped").length
for (let i = 0; i < numRows; i++) {
    if (i % 2 != 0) {
        // if odd
        rows[i].classList.add("bg-body-secondary");
    }
}