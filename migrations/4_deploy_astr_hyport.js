/* global artifacts */
require('dotenv').config({ path: '../.env' })
const ASTRHyport = artifacts.require('ASTRHyport')
const Verifier = artifacts.require('Verifier')
const hasherContract = artifacts.require('Hasher')


module.exports = function (deployer, network, accounts) {
    return deployer.then(async () => {
        const { MERKLE_TREE_HEIGHT, ASTR_AMOUNT } = process.env
        const verifier = await Verifier.deployed()
        console.log('verifier address: ', verifier.address);
        const hasherInstance = await hasherContract.deployed()
        console.log('hasherInstance address: ', hasherInstance.address);
        await ASTRHyport.link(hasherContract, hasherInstance.address)
        const hyport = await deployer.deploy(ASTRHyport, verifier.address, ASTR_AMOUNT, MERKLE_TREE_HEIGHT, accounts[0])
        console.log(`ASTRHyport${ASTR_AMOUNT / 1e18} address`, hyport.address)
    })
}