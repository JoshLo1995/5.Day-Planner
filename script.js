$(document).ready(function() {
    dateAndtime();
    coloredTextAreas();
    load();


    $(".btn").click(function(event) {
        saveText(event.target.id);
    })

    // $(".input").focus(function() {
    //     coloredTextAreas(this.id);
    // });
})


// Populate all text fields with saved info from local storage
function load() {
    let savedText;
    for (i = 1; i <= 9; i++) {
        savedText = localStorage.getItem("save"+i);
        $("#input" + i).val(savedText);
    }

}


// Display the date and time at the top of the page
function dateAndtime() {
    setInterval(function() {
        $("#currentDate").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);
}

// Change the background color of a text area depending on if the time has passed or not
function coloredTextAreas(txtField) {
    let colored = [];
    let current;
    let now = moment().hour();
    // What is the JS equivalent to range() in python?
    let hours = Array(9, 10, 11, 12, 13, 14, 15, 16, 17, 18);
    let counter = 0;

    // If time has passed, push into colored
    for (hour of hours) {
        (now > hour) ? colored.push("#input" + counter) : now == counter ? current = "#input"+counter : pass;
        counter++;
    }

    for (color of colored) {
        $(color).css("background-color", "grey");
    }

    $(current).css("background-color", "red");

}


// Select text box and its value
// Save to local storage
function saveText(clicked) {
    console.log(typeof(clicked));
    let textInBox = $("#input" + clicked.slice(-1)).val();
    localStorage.setItem(clicked, textInBox);
}