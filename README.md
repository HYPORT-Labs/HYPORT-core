HYPORT is a fully decentralized non-custodial protocol that allows private transactions as well as private yield bearing deposits, based on zkSNARKs and battle tested Tornado's core contracts. It improves transaction privacy by breaking the on-chain link between the recipient and destination addresses. It uses a smart contract that accepts ASTR deposits that can be withdrawn by a different address. Whenever ASTR is withdrawn by the new address, there is no way to link the withdrawal to the deposit, ensuring complete privacy.

## Requirements

1. `node v11.15.0`
2. `npm install -g npx`

### Initialization

1. `cp .env.example .env`
1. `npm run build:contract`

## Deploy ASTR Hyport Contract
1. `cp .env.example .env`
1. Tune all necessary params
1. `npx truffle migrate --network shubiya --reset --f 2 --to 4`

## Deploy ERC20 Hyport Contract

1. `cp .env.example .env`
1. Tune all necessary params
1. `npx truffle migrate --network shubiya --reset --f 2 --to 3`
1. `npx truffle migrate --network shubiya --reset --f 5`

**Note**. If you want to reuse the same verifier for all the instances, then after you deployed one of the instances you should only run the 4th or 5th migration for ASTR or ERC20 contracts respectively (`--f 4 --to 4` or `--f 5`).
