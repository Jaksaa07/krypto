// https://eth-ropsten.alchemyapi.io/v2/Wk1t6YuUyyVfH0wWOG8yBYOUnu8mwqCE

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Wk1t6YuUyyVfH0wWOG8yBYOUnu8mwqCE',
      accounts: [
        '5fc868d3a0dfc35fdda7612b9668d6124de254e289818c3a9b07515a89edc0b8',
      ],
    },
  },
}
