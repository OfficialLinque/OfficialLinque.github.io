$("#authnxtbtn").click(function () {
    $("#auth").hide();
    $("#store").show();
});

$("#storeprvbtn").click(function () {
    $("#store").hide();
    $("#auth").show();
});

$("#storenxtbtn").click(function () {
    $("#store").hide();
    $("#owner").show();
});

$("#ownerprvbtn").click(function () {
    $("#owner").hide();
    $("#store").show();
});
