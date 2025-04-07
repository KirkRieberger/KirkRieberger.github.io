// Page-specific JavaScript
// Once document fully loaded
$(document).ready(function () {
    const contactForm = document.getElementById("form");
    contactForm.addEventListener('submit', event => {
        if (!contactForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        contactForm.classList.add('was-validated');
    }, false);
});

function submitForm() {
    // Successful Validation
    const successModal = new bootstrap.Modal($("#form-modal-success"));
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    let email = $("#username").val() + $("#domain").val();
    let subject = $("#subject").val();
    let message = $("#message").val();

    successModal.show();
}

function revealEmail() {
    $("#email-cover").addClass("hidden");
    $("#email").removeClass("hidden");
}

function headingClick(n) {
    // 0 -> First Name
    // 1 -> Last Name
    // 2 -> Instrument
    let state;
    switch (n) {
        case (0):
            state = $("#table-sort-0").text();
            if (state == "⇕") {
                $("#table-sort-0").text("⇑");
                $("#table-sort-1").text("⇕");
                $("#table-sort-2").text("⇕");
                sortTable(0, "ascending");
            } else if (state == "⇑") {
                $("#table-sort-0").text("⇓");
                $("#table-sort-1").text("⇕");
                $("#table-sort-2").text("⇕");
                sortTable(0, "descending");
            } else {
                $("#table-sort-0").text("⇑");
                $("#table-sort-1").text("⇕");
                $("#table-sort-2").text("⇕");
                sortTable(0, "ascending");
            }
            break;
        case (1):
            state = $("#table-sort-1").text();
            if (state == "⇕") {
                $("#table-sort-0").text("⇕");
                $("#table-sort-1").text("⇑");
                $("#table-sort-2").text("⇕");
                sortTable(1, "ascending");
            } else if (state == "⇑") {
                $("#table-sort-0").text("⇕");
                $("#table-sort-1").text("⇓");
                $("#table-sort-2").text("⇕");
                sortTable(1, "descending");
            } else {
                $("#table-sort-0").text("⇕");
                $("#table-sort-1").text("⇑");
                $("#table-sort-2").text("⇕");
                sortTable(1, "ascending");
            }
            break;
        case (2):
            state = $("#table-sort-2").text();
            if (state == "⇕") {
                $("#table-sort-0").text("⇕");
                $("#table-sort-1").text("⇕");
                $("#table-sort-2").text("⇑");
                sortTable(2, "ascending");
            } else if (state == "⇑") {
                $("#table-sort-0").text("⇕");
                $("#table-sort-1").text("⇕");
                $("#table-sort-2").text("⇓");
                sortTable(2, "descending");
            } else {
                $("#table-sort-0").text("⇕");
                $("#table-sort-1").text("⇕");
                $("#table-sort-2").text("⇑");
                sortTable(2, "ascending");
            }
            break;
    }
}

// Adapted from: https://www.w3schools.com/howto/howto_js_sort_table.asp
// Note: this is an implementation of the "Bubble Sort" algorithm
function sortTable(n, dir) {
    let table, rows, switching, i, x, y, shouldSwitch;
    table = $("#FloydTable");
    switching = true;

    while (switching) {
        switching = false;
        rows = table['0'].rows;

        neighbourCheck: for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];

            switch (dir) {
                case ("ascending"):
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break neighbourCheck;
                    }
                    break;
                case ("descending"):
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break neighbourCheck;
                    }
                    break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
            switching = true;
        }
    }
}