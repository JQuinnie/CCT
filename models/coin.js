// Set up database using Sequelize to take in data fields

module.exports = function (sequelize, DataTypes) {
  const Coins = sequelize.define('Coins', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    coin_id: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    symbol: {
      type: DataTypes.STRING
    },
    rank: {
      type: DataTypes.INTEGER
    },
    price_usd: {
      type: DataTypes.DECIMAL(13, 4)
    },
    total_supply: {
      type: DataTypes.DECIMAL(13, 0)
    },
    percent_change_24h: {
      type: DataTypes.DECIMAL(11, 2)
    }
  });

  // placeholder data for the database
  Coins.sync({
    force: true
  }).then(function () {
    return Coins.bulkCreate([{
        coin_id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        rank: 1,
        price_usd: 12725.10,
        total_supply: 213983690962,
        percent_change_24h: 7.08
      },
      {
        coin_id: 'ethereum',
        name: 'Ethereum',
        symbol: 'ETH',
        rank: 2,
        price_usd: 1138.96,
        total_supply: 110605032646,
        percent_change_24h: 6.29
      },
      {
        coin_id: 'ripple',
        name: 'Ripple',
        symbol: 'XRP',
        rank: 3,
        price_usd: 1.54619,
        total_supply: 59898075223,
        percent_change_24h: 1.31
      }
    ])
  })

  return Coins;
}
