$(function() {
    $(".adda-burger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger-name").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST", 
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");

                location.reload();
            }
        );
    });
});