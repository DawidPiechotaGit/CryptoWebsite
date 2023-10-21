// fetch("https://api.coinranking.com/v2/coins", {
//   method: "GET",
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//     "x-access-token":
//       "coinrankingba175429cb3c8244d4f3140ea81183fe9f304aa47aabf336",
//   },
// }).then((response) => {
//   if (response.ok) {
//     response.json().then((json) => {
//       const cryptoBTC = json.data.coins[0];
//       console.log(json.data.coins[0]);
//       const coinsData = json.data.coins;

//       if (coinsData.length > 0) {
//         var cryptoCoin = "";
//       }

//       coinsData.forEach((coin) => {
//         cryptoCoin += `<div>`;
//         cryptoCoin += `<p> ${coin.name}</p>`;
//         cryptoCoin += `<p> ${coin.symbol}</p>`;
//         cryptoCoin += `<p> $${Math.round(coin.price * 10000) / 10000}</p>`;
//         cryptoCoin += `</div>`;
//       });
//       //For Loop Ends
//       document.getElementById("data").innerHTML = cryptoCoin;

//       // document.getElementById("btc").innerHTML = cryptoBTC.price;
//     });
//   }
// });

fetch("https://pro-api.coingecko.com/api/v3/ ", {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "x-access-token": "CG-WYsNyL4TQVsc7seZEN65exKa	",
    "Access-Control-Allow-Origin": "*",
  },
}).then((response) => {
  if (response.ok) {
    response.json().then((json) => {
      const cryptoBTC = json.data.coins[0];
      console.log(json.data.coins[0]);
      const coinsData = json.data.coins;

      if (coinsData.length > 0) {
        var cryptoCoin = "";
      }

      coinsData.forEach((coin) => {
        // cryptoCoin += `<p> ${coin.uuid} </p>`;
        // cryptoCoin += `<p> ${coin.rank}</p>`;
        // cryptoCoin += `<p> ${coin.tier} </p>`;
        cryptoCoin += `<div>`;
        cryptoCoin += `<p> ${coin.name}</p>`;
        cryptoCoin += `<p> ${coin.symbol}</p>`;
        cryptoCoin += `<p> $${Math.round(coin.price * 10000) / 10000}</p>`;
        cryptoCoin += `</div>`;
      });
      //For Loop Ends
      document.getElementById("data").innerHTML = cryptoCoin;

      // document.getElementById("btc").innerHTML = cryptoBTC.price;
    });
  }
});
