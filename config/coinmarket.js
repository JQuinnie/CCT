var CoinMarketCap = require("node-coinmarketcap");
var coinmarketcap = new CoinMarketCap();

coinmarketcap.multi(coins => {

	 console.log(coins(100)(0));



	 });