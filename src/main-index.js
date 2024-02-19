// Once document fully loaded
$(document).ready(function () {
    // Initialize toasts
    $('.toast').toast({ delay: 2000 })
    $('.toast').toast('hide');
})

// if (window.matchMedia("prefers-color-scheme: dark")) {
//     $("body").addClass("dark-mode");
// }

function submitForm() {
    const successModal = $("#form-modal-success");
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    let email = $("#username").val() + $("#domain").val();
    let subject = $("#subject").val();
    let message = $("#message").val();

    if (fName != "" && lName != "" && email != "" && subject != "" && message != "") {
        successModal.modal('show');
    } else {
        $("#form-failure-toast").toast("show");
    }
}

/*
function updateTable() {
    var number = $("#number").val();
    if (number.length > 76) {
        console.log("Input too long");
        $('#table-length-toast').toast('show');
        document.getElementById("number").value = "";
    } else if (number != "") {
        document.getElementById("table_fill").innerHTML = number;
        $('#table-update-toast').toast('show');
        console.log("Updated table 0, 0 to: " + number);
        document.getElementById("number").value = "";
    } else {
        console.log("Invalid input");
        $('#table-error-toast').toast('show');
        document.getElementById("number").value = "";
    }
}
*/

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