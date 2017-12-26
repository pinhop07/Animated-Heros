// Hero name array
var heroList = ["Spiderman", "Deadpool", "Wolverine", "Cable", "Cyclops", "Iron Man", "Beast", "Thanos", "Thor", "Black Widow", "Black Panther", "Star Lord", "Groot", "Daredevil", "Hawkeye", "Antman", "Doctor Strange", "Jean Grey", "Magneto", "Silver Surfer", "Rocket Racoon", "Venom", "Nick Fury", "Scarlet Witch", "Hulk", "Hela", "Odin"];

// Render hero button list on screen
function renderButton() {

	// Empty the section before rendering
	$("#hero-list").empty();

	//Loop through each array element, create button for each of them, set values and attributes accordingly
	for (var i = 0; i < heroList.length; i++) {
		var btn = $("<button class='btn btn-primary'>");

		btn.addClass("heros-btn");
		btn.attr("data-name", heroList[i]);
		btn.text(heroList[i]);

		$("#hero-list").append(btn);
	}
}

//Display heros using giphy API
function displayHeros() {

	//Get the name of hero from the button clicked and add to the URL
	var heroName = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + heroName + " Marvel&api_key=dc6zaTOxFJmzC&limit=10";

	// Ajax call
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function (heroGIF) {
		// Empty section before displaying hero images
		$("#hero-images").empty();

		for (var j = 0; j < heroGIF.data.length; j++) {
			// Create html elements for each object
			var heroDiv = $("<div class='pull-left'>");
			var p = $("<p>");
			var heroImg = $("<img>");

			// Set attributes (still image url, animated image url, status of image to still and class) to the image
			heroImg.addClass("hero-img");
			heroImg.attr("data-state", "still");
			heroImg.attr("data-still", heroGIF.data[j].images.fixed_height_still.url);
			heroImg.attr("data-animate", heroGIF.data[j].images.fixed_height.url);

			// Get the image url and its ratiing
			p.text("Rating : " + heroGIF.data[j].rating);
			heroImg.attr("src", heroGIF.data[j].images.fixed_height_still.url);

			// Append image and its rating
			heroDiv.append(heroImg);
			heroDiv.append(p);
			$("#hero-images").append(heroDiv);
		}

	});
}

// When we click on the image it should animate if we click again it should stop
function animateHeros() {

	// Get the attributes of clicked image
	var state = $(this).attr("data-state");
	var animate = $(this).attr("data-animate");
	var still = $(this).attr("data-still");

	//Change url according to the status
	if (state !== 'still') {
		$(this).attr("src", still);
		$(this).attr("data-state", 'still');

	} else {
		$(this).attr("src", animate);
		$(this).attr("data-state", 'animate');
	}

}

// On submiting new hero name, add it to the hero list
$("#submit-hero").on("click", function () {
	//Get user input
	var heroName = $("#hero-name").val().trim();

	// If user input a alue append to the hero list array and render the butons
	if (heroName) {
		heroList.push(heroName);
		renderButton();
	}

	// Clear the input field after rendering
	$("#hero-name").val("");
});

// When clicking on any of the button in the hero list, call displayHeros to display heros
$(document).on("click", ".heros-btn", displayHeros);

// When click on any of image displayed, call animateHeros function to animate
$(document).on("click", ".hero-img", animateHeros);

// Render button for each hero on page load
renderButton();