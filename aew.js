$(function () {

    // Start counting from the third row
    let counter = 3;

    $("#addRow").on("click", function (event) {
        event.preventDefault();

        let newRow = $("<tr>");
        let cols = '';

        // Table columns
        cols += '<th scrope="row">' + counter + '</th>';

        cols += '<td><input class="form-control rounded-0" type="text" name="fullname" placeholder="Full Name"></td>';

        cols += '<td><input class="form-control rounded-0" type="text" name="title" placeholder="Title"></td>';

        cols += '<td><input class="form-control rounded-0" type="text" name="wins/losses" placeholder="Wins/Losses"></td>';

        cols += '<td><input class="form-control rounded-0" type="text" name="#ofmatches" placeholder="# of Matches"></td>';

        cols += '<td><button class="btn btn-danger rounded-0" id ="deleteRow"><i class="fa fa-trash"></i></button</td>';

        // Insert the columns inside a row
        newRow.append(cols);

        // Insert the row inside a table
        $("table").append(newRow);

        // Increase counter after each row insertion
        counter++;
    });

    // Remove row when delete btn is clicked
    $("table").on("click", "#deleteRow", function (event) {
        $(this).closest("tr").remove();
        counter -= 1
    });
});


