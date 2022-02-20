require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth soap unhappy harvest brass equal gauge'; 
let testAccounts = [
"0x1d121468b8cd7a385e82de8ecca42f8f280f9d9606e3befe77f8f0de362980fc",
"0x590119a4749c2bd7e02de4046fc464f8a539f10adfb82f5a0dde9248fe71460b",
"0x56f26010e26d9ea41e60cad08a2d8b9656e7336e4834ae1f0f935e9891321ba7",
"0x5c1f0851e68a609cafb28375ee5c099198c07dd860ea335d3af991e2e40358e5",
"0x4f6a48fb10ad9db0a0604f2812c7b7e0ff12b388514aefed76b7f65e4ef51acb",
"0xcd1d08edf5515d83e575172360fc1ab8dd807e3a7f8002bf01c0b5bee0b0dc49",
"0xf64681552dd8a7fd59b5cf3f35337629773c0aac681d931bea850d149bf873e6",
"0xd55825d30a6e71c6696b43f2bf263b5dadd84d448f6153c9ae7fbe5ddeb0c6c7",
"0x6ea1f17d8ac87ebe3a6845fe790f56d06889c3102802ac242f9e961bfa0c2d77",
"0x0945acb2ba17bcf856a4bb903dce5127ffb23f441c3a7895455c048af8cc2040"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

