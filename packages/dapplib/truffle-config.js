require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind artist gesture forest frame thank'; 
let testAccounts = [
"0xc16a8e9ccc2db8c18e75f51a646860f2626f867d5eda6df0dac15397671f6d9d",
"0xf07971d5e6d8a71afafbe215fce9c158d229b646d39fa77f784d9931053464fc",
"0xc27ec941dbacd1380fac590106711aed5238a72965a7c0bc6cab2d70b6be8247",
"0xb180f4ae6241c671fff32294bcb113a0f482ccf74e8165709d2d35c65d2cbe2f",
"0xcb19aa18b49a5d7fb62aed0c04d1dafeeb925904b5175abb4866de4813d4b8ef",
"0x6f4693fa5f5d7e24e9170f2b87aa648ce89f700cc83f52c2c7bf7741874ef192",
"0x1fc0a880c33004b6a932022f4c2a78b9bcbecfde540b3dd302b5ce8e143441c6",
"0x6e064e1ab07d735cd5ed4c12f82ad1a35b9c8a55c11901cd75f9b3a61e5076d6",
"0x95f0f92806c4405c2a571edc5c3630acaa9e90938275def9dd74d490f4414646",
"0xac1cb5c760d37be29f36c662208e4eda603729cfad67b5b8ad43e2786850a57a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


