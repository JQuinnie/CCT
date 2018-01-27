// initial starter file

// Need logic to use jquery on click and ajax for frontend to backend interaction


/*	Page Preloader */

// $(window).on("load", function() {
//   $('#preloader').fadeOut('slow', function() {
//     $(this).remove();
//   });
// });

function makeFavorite(symbol) {

	$.ajax("/api/favorites/addfavorite", {
					method: "POST",
					data: {symbol: symbol}
				}).done(function() {
				 location.reload();
				});
	}


$(document).ready(function() {
  

//$("#generate").on("click", function(event) {

//event.preventDefault();

var coinMarketApi = "https://api.coinmarketcap.com/v1/ticker/?limit=0"

$.ajax({
                url: coinMarketApi,
                method: "GET"
            })

 .done(function(response) {

 var results = response;

 console.log(results);

for (var i = 0; i < results.length; i++) {
	
	var name = results[i].name;

	var symbol = results[i].symbol;

	var rank = results[i].rank;

	var price = results[i].price_usd;

	var market = results[i].market_cap_usd;

	var percent = results[i].percent_change_24h;

	$("#coin-tracker > tbody").append("<tr><td>" + name + "</td><td>" + symbol + "</td><td>" +
  rank + "</td><td>" + price + "</td><td>" + market + "</td><td>" + percent + "</td></tr>");
}

//});
  $('#coin-tracker').DataTable({
    	"paging":   true
    });
});

$.ajax("/api/favorites", {
				method: "GET"
			}).done(
			function(response) {
				var favsymbol = "";

			for (var j = 0; j < response.length; j++) {

				favsymbol = response[j].symbol;

			$.ajax({
                url: coinMarketApi,
                method: "GET"
            })

		.done(function(response) {

		var result = response;

		for (var i = 0; i < result.length; i++) {

			if (favsymbol === result[i].symbol) {
			
			var name = result[i].name;

			var symbol = result[i].symbol;

			var rank = result[i].rank;

			var price = result[i].price_usd;

			var market = result[i].market_cap_usd;

			var percent = result[i].percent_change_24h;
			$("#favorite-table > tbody").append("<tr><td>" + name + "</td><td>" + symbol + "</td><td>" +
			rank + "</td><td>" + price + "</td><td>" + market + "</td><td>" + percent + "</td></tr>");
			
		}
		
}
			//location.reload();
			});


}
			});
	
});





