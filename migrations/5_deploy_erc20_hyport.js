/* global artifacts */
require('dotenv').config({ path: '../.env' })
const ERC20Hyport = artifacts.require('ERC20Hyport')
const Verifier = artifacts.require('Verifier')
const hasherContract = artifacts.require('Hasher')

module.exports = function (deployer, network, accounts) {
    return deployer.then(async () => {
        const { MERKLE_TREE_HEIGHT, ERC20_TOKEN, TOKEN_AMOUNT } = process.env
        const verifier = await Verifier.deployed()
        const hasherInstance = await hasherContract.deployed()
        await ERC20Hyport.link(hasherContract, hasherInstance.address)
        let token = ERC20_TOKEN
        const hyport = await deployer.deploy(
            ERC20Hyport,
            verifier.address,
            TOKEN_AMOUNT,
            MERKLE_TREE_HEIGHT,
            accounts[0],
            token,
        )
        console.log(`ERC20Hyport${TOKEN_AMOUNT / 1e18} address`, hyport.address)
    })
}