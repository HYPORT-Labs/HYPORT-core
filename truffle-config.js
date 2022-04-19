require('dotenv').config()
const Web3 = require('web3')
const HDWalletProvider = require('@truffle/hdwallet-provider')
const utils = require('web3-utils')

module.exports = {

    networks: {
        development: {
            provider: function () {
                return new Web3.providers.HttpProvider('http://127.0.0.1:7545')
            },
            network_id: '*',
        },
        shibuya: {
            provider: () =>
                new HDWalletProvider(
                    process.env.PRIVATE_KEY,
                    'https://rpc.shibuya.astar.network:8545',
                ),
            network_id: 81,
            // gasPrice: utils.toWei('1', 'gwei'),
            confirmations: 0,
            // timeoutBlocks: 200,
            skipDryRun: true,
        },
        mainnet: {
            provider: () =>
                new HDWalletProvider(
                    process.env.PRIVATE_KEY,
                    'https://rpc.astar.network:8545',
                ),
            network_id: 592,
            // gasPrice: utils.toWei('1', 'gwei'),
            confirmations: 0,
            // timeoutBlocks: 200,
            skipDryRun: true,
        },
    },

    // Set default mocha options here, use special reporters etc.
    mocha: {
        // timeout: 100000
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: '0.5.17',    // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            settings: {          // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 200
                },
                // evmVersion: "byzantium"
            }
        },
        external: {
            command: 'node ./compileHasher.js',
            targets: [{
                path: './build/Hasher.json'
            }],
        }
    }
}