# Animated-Heros

### Overview

The GIPHY API is used to make a dynamic web page that populates with gifs. The website calls the GIPHY API and use JavaScript and jQuery to change the HTML of your site.

## Animated Heros

1. The user clicks on a button, the page grabs 10 static, non-animated gif images from the GIPHY API and place them on the page.

2. When the user clicks one of the still GIPHY images, the gif becomes animated. If the user clicks the gif again, it stops playing.

3. Under every gif, display its rating (PG, G, so on).

4. Add a hero input box takes a value from the user and adds it the buttons on the page.

### Technologies used

* HTML5
* CSS3
* Bootstrap
* JavaScript
* jQuery
* Giphy API

### Prerequisites

```
- Bootstrap: visit https://www.bootstrapcdn.com/ and link in html
- jQuery: visit http://code.jquery.com/ and link in html
```

#### Giphy API

* Step One: Go to https://developers.giphy.com/docs/ and fill out and submit the form
* Step Two: Go to your dashboard and get your API key

* Inside your .js file insert the following code:

``` JavaScript

//Display heros using giphy API
function displayHeros() {

	var API_Key = " your API key "

	//Get the name of hero from the button clicked and add to the URL
	var heroName = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + heroName + " Marvel&api_key=" + API_Key + ";

	// Ajax call
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function (heroGIF) {
			Content...
	});
}

```

### Built With

* Sublime Text - Text Editor

### Copyright

Paul Pinho © 2018. All Rights Reserved.